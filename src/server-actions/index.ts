"use server";

import { getRequestBody } from "@/utils";
import {
  CreatePaymentLinkResponseI,
  getPaymentLinkActionPayloadI,
} from "./server_actions_types";
import prisma from "../../lib/prisma";

const getAuthToken = async () => {
  const res = await fetch(
    "https://oauth2.bog.ge/auth/realms/bog/protocol/openid-connect/token",
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${process.env.BOG_AUTH_BASE64!}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }),
    }
  );

  const data = await res.json();

  return data.access_token;
};

export const createTransaction = async () => {
  return "";
};

const getOrderReceipt = async (href: string, authToken: string) => {
  const res = await fetch(href, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  const body: { order_id: string; purchase_units: { request_amount: number } } =
    await res.json();

  return body;
};

const createTransactionRecord = async ({
  amount,
  receiverIBAN,
  plusPoints,
  lariAmountTheyReceive,
  phone,
}: {
  amount: number;
  receiverIBAN: string;
  plusPoints: number;
  lariAmountTheyReceive: number;
  phone: string;
}) => {
  const response = await prisma.transaction.create({
    data: {
      paidPlusPointsInLari: amount,
      receiverIBAN,
      paidPlusPoints: plusPoints,
      lariAmountTheyReceive,
      phone,
    },
  });

  return response;
};

export const getPaymentLinkAction = async ({
  requiredLariAmount,
  paymentMethod,
  receiverIBAN,
  plusPoints,
  lariAmountTheyReceive,
  phone,
}: getPaymentLinkActionPayloadI): Promise<CreatePaymentLinkResponseI> => {
  "use server";
  const authToken = await getAuthToken();

  const transactionResponse = await createTransactionRecord({
    amount: Number(requiredLariAmount),
    receiverIBAN,
    plusPoints,
    lariAmountTheyReceive,
    phone,
  });

  const res = await fetch("https://api.bog.ge/payments/v1/ecommerce/orders", {
    method: "POST",
    headers: {
      "Accept-Language": "ka",
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      getRequestBody(paymentMethod, requiredLariAmount, transactionResponse.id)
    ),
  });

  const body: CreatePaymentLinkResponseI = await res.json();

  const receipt = await getOrderReceipt(body._links.details.href, authToken);

  await prisma.transaction.update({
    where: {
      id: transactionResponse.id,
    },
    data: {
      orderIdBOG: receipt.order_id,
    },
  });

  return body;
};

export const getTransaction = async (transactionId: string) => {
  try {
    const transaction = await prisma.transaction.findUnique({
      where: {
        id: transactionId,
      },
    });

    return transaction;
  } catch (error: any) {
    console.error(`Error fetching transaction: ${error.message}`);
    throw error;
  }
};
