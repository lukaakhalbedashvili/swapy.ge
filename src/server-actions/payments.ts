"use server";

interface CreatePaymentLinkResponseI {
  _links: {
    redirect: {
      href: string;
    };
    details: {
      href: string;
    };
  };
  id: string;
}

const getAuthToken = async () => {
  const res = await fetch(
    "https://oauth2.bog.ge/auth/realms/bog/protocol/openid-connect/token",
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${process.env.BOG_AUTH}`,
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

const getRequestBody = ({
  amount,
  govId,
}: {
  amount: string;
  govId: string;
}) => ({
  callback_url: `https://swapy.ge/payment/callback?govId=${govId}`,
  purchase_units: {
    currency: "GEL",
    total_amount: amount,
    basket: [
      {
        quantity: 1,
        unit_price: amount,
        product_id: amount,
      },
    ],
  },
  redirect_urls: {
    fail: `https://swapy.ge/fail?govId=${govId}`,
    success: `https://swapy.ge/success?govId=${govId}`,
  },
});

export const getPaymentLinkAction = async ({
  amount,
  govId,
}: {
  amount: string;
  govId: string;
}) => {
  const authToken = await getAuthToken();

  const res = await fetch("https://api.bog.ge/payments/v1/ecommerce/orders", {
    method: "POST",
    headers: {
      "Accept-Language": "ka",
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(getRequestBody({ amount: amount, govId })),
  });

  const body: CreatePaymentLinkResponseI = await res.json();

  return body;
};
