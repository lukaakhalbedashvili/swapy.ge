export async function POST(req: Request) {
  const request = await req.json();

  console.error(
    request.body.order_status,
    "request.body.order_status",
    request
  );

  return new Response("Hello, Next.js!", {
    status: 200,
  });
}
