"use server";

import { getRequestBody } from "@/utils";
import {
  CreatePaymentLinkResponseI,
  getPaymentLinkActionPayloadI,
} from "./server_actions_types";

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

export const getPaymentLinkAction = async ({
  requiredLariAmount,
  paymentMethod,
}: getPaymentLinkActionPayloadI): Promise<CreatePaymentLinkResponseI> => {
  "use server";
  const authToken = await getAuthToken();

  const res = await fetch("https://api.bog.ge/payments/v1/ecommerce/orders", {
    method: "POST",
    headers: {
      "Accept-Language": "ka",
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(getRequestBody(paymentMethod, requiredLariAmount)),
  });

  return await res.json();
};
