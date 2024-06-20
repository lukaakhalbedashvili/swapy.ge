import { PaymentMethods } from "@/server-actions/server_actions_types";

export const getRequestBody = (
  paymentMethod: PaymentMethods,
  amount: string | number,
  transactionId: string
) => {
  return {
    callback_url: `https://plus-pi.vercel.app/api/payments/callback`,
    purchase_units: {
      currency: "GEL",
      total_amount: amount,
      basket: [
        {
          quantity: 1,
          unit_price: 1,
          product_id: "1",
        },
      ],
    },
    redirect_urls: {
      fail: `${process.env.NEXT_APP_BASE_URL}/failure/${transactionId}`,
      success: `${process.env.NEXT_APP_BASE_URL}/success/${transactionId}`,
    },
    payment_method: [paymentMethod],
  };
};
