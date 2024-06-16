"use server";

interface CreatePaymentLinkResponseI {
  data: {
    _links: {
      redirect: {
        href: string;
      };
    };
  };
}

export const sendToBack = async (
  requiredLari: string
): Promise<CreatePaymentLinkResponseI> => {
  const response = await fetch("http://localhost:3000/api/payments/sell", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ requiredLari }),
  });

  return await response.json();
};
