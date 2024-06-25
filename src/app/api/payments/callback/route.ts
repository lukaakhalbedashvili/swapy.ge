import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const request = await req.json();

    console.error(
      request.body.order_status.values,
      "request.body.order_status",
      request
    );

    const orderId = request.body.order_id;

    try {
      const updatedOrder = await prisma.transaction.update({
        where: {
          orderIdBOG: orderId,
        },
        data: {
          isPaid: request.body.order_status.values === "წარმატებული",
        },
      });

      console.log(updatedOrder);

      return new NextResponse("Order status updated successfully!", {
        status: 200,
      });
    } catch (error) {
      console.error("Error updating order status:", error);
      return new NextResponse("Error updating order status", {
        status: 500,
      });
    }
  } catch (error) {
    console.error("Error parsing request:", error);
    return new NextResponse("Invalid request", {
      status: 400,
    });
  }
}
