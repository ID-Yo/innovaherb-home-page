import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminRequest } from "@/lib/admin-auth";
import { createAdminClient } from "@/lib/supabase/admin";

const schema = z.object({
  stock: z.number().int().min(0),
});

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    await requireAdminRequest();
    const { slug } = await params;
    const payload = schema.parse(await request.json());
    const supabase = createAdminClient();
    const { error } = await supabase.from("inventory").upsert({
      product_slug: slug,
      stock_on_hand: payload.stock,
    });

    if (error) {
      throw error;
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to update inventory.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
