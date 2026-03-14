import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminRequest } from "@/lib/admin-auth";
import { createAdminClient } from "@/lib/supabase/admin";

const schema = z.object({
  userId: z.string().uuid(),
  password: z.string().min(12),
});

export async function POST(request: Request) {
  try {
    await requireAdminRequest();
    const payload = schema.parse(await request.json());
    const supabase = createAdminClient();
    const { error } = await supabase.auth.admin.updateUserById(payload.userId, {
      password: payload.password,
    });

    if (error) {
      throw error;
    }

    const profileResult = await supabase
      .from("admin_users")
      .update({ is_temporary_password: false })
      .eq("user_id", payload.userId);

    if (profileResult.error) {
      throw profileResult.error;
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to update password.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
