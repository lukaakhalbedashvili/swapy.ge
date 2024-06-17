import { getPaymentLinkActionPayloadI } from "@/server-actions/server_actions_types";
import { getRequestBody } from "@/utils";

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

export async function POST(req: Request) {
  const body: getPaymentLinkActionPayloadI = await req.json();
  const authToken = await getAuthToken();

  const res = await fetch("https://api.bog.ge/payments/v1/ecommerce/orders", {
    method: "POST",
    headers: {
      "Accept-Language": "ka",
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      getRequestBody(body.paymentMethod, body.requiredLariAmount)
    ),
  });

  const data = await res.json();

  return Response.json({ data });
}
