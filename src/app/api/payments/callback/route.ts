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
          isPaid: request.body.order_status.value === "წარმატებული",
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

// undefined request.body.order_status {
//   event: 'order_payment',
//   request_time: '2024-07-12T10:07:17.002484',
//   zoned_request_time: '2024-07-12T06:07:17.002484Z',
//   body: {
//     order_id: '39782f20-e5c6-4257-bd58-59375c401ffe',
//     external_order_id: null,
//     client: {
//       id: '42973',
//       brand_ka: 'გაჯეტ ჰევენი',
//       brand_en: 'Gadget Haven',
//       url: 'https://www.gadget-haven.store'
//     },
//     create_date: '2024-07-12T10:06:34.051641',
//     zoned_create_date: '2024-07-12T06:06:34.051641Z',
//     expire_date: '2024-07-12T10:21:34.051641',
//     zoned_expire_date: '2024-07-12T06:21:34.051641Z',
//     order_status: { key: 'completed', value: 'წარმატებული' },
//     buyer: null,
//     redirect_links: {
//       success: 'https://plus-pi.vercel.app/success/f6dc3e66-0dd5-4220-9b09-4e5cd1001554',
//       fail: 'https://plus-pi.vercel.app/failure/f6dc3e66-0dd5-4220-9b09-4e5cd1001554'
//     },
//     payment_detail: {
//       transfer_method: [Object],
//       transaction_id: '3463069392',
//       payer_identifier: '548888***9306',
//       payment_option: 'direct_debit',
//       card_type: null,
//       card_expiry_date: null,
//       request_account_tag: null,
//       transfer_account_tag: null,
//       saved_card_type: null,
//       parent_order_id: null
//     },
//     actions: null,
//     disputes: null,
//     split: null,
//     discount: null,
//     lang: 'ka',
//     reject_reason: null,
//     industry: 'ecommerce',
//     capture: null,
//     purchase_units: {
//       request_amount: '1.13',
//       transfer_amount: '1.13',
//       refund_amount: null,
//       currency_code: 'GEL',
//       items: [Array]
//     }
//   }
// }
