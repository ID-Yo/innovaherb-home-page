import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminRequest } from "@/lib/admin-auth";
import { createAdminClient } from "@/lib/supabase/admin";

const schema = z.object({
  priceCents: z.number().int().positive(),
  published: z.boolean(),
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
    const { error } = await supabase
      .from("products")
      .update({ price_cents: payload.priceCents, published: payload.published })
      .eq("slug", slug);

    if (error) {
      throw error;
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to update product.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
