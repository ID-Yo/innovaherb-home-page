import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export async function requireAdminRequest() {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookieValues: Array<{ name: string; value: string; options?: Record<string, unknown> }>) {
          cookieValues.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options as never),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const profile = await supabase
    .from("admin_users")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (profile.error || !profile.data) {
    throw new Error("Admin access required");
  }

  return user;
}
