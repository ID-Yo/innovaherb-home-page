import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminRequest } from "@/lib/admin-auth";
import { updateOrderStatus } from "@/lib/admin";

const schema = z.object({
  status: z.enum([
    "draft",
    "awaiting_payment",
    "paid",
    "packing",
    "shipped",
    "delivered",
    "cancelled",
    "refunded",
    "payment_failed",
    "oversold_review",
  ]),
});

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await requireAdminRequest();
    const { id } = await params;
    const payload = schema.parse(await request.json());
    await updateOrderStatus(id, payload.status);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to update order status.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
