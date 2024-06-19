import { PaymentMethods } from "@/server-actions/server_actions_types";

export const getRequestBody = (
  paymentMethod: PaymentMethods,
  amount: string | number
) => {
  console.log("https://plus-pi.vercel.app/");

  return {
    callback_url: `${process.env.NEXT_APP_BASE_URL}/callback`,
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
      fail: "https://example.com/fail",
      success: "https://example.com/success",
    },
    payment_method: [paymentMethod],
  };
};
