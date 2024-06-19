export async function POST(req: Request) {
  console.error(await req.json(), "pop");

  return new Response("Hello, Next.js!", {
    status: 200,
  });
}
