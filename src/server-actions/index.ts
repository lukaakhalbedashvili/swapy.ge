"use server";

import {
  CreatePaymentLinkResponseI,
  getPaymentLinkActionPayloadI,
} from "./server_actions_types";

export const getPaymentLinkAction = async ({
  requiredLariAmount,
  paymentMethod,
}: getPaymentLinkActionPayloadI): Promise<CreatePaymentLinkResponseI> => {
  const response = await fetch("http://localhost:3000/api/payments/sell", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ requiredLariAmount, paymentMethod }),
  });

  return await response.json();
};
