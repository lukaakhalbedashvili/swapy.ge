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

const requestBody = {
  callback_url: "https://example.com/callback",
  external_order_id: "id123",
  purchase_units: {
    currency: "GEL",
    total_amount: 1,
    basket: [
      {
        quantity: 1,
        unit_price: 1,
        product_id: "product123",
      },
    ],
  },
  redirect_urls: {
    fail: "https://example.com/fail",
    success: "https://example.com/success",
  },
  payment_method: ["bog_loyalty"],
};

export async function POST() {
  const authToken = await getAuthToken();

  const res = await fetch("https://api.bog.ge/payments/v1/ecommerce/orders", {
    method: "POST",
    headers: {
      "Accept-Language": "ka",
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  const data = await res.json();

  return Response.json({ data });
}
