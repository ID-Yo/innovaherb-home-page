import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const email = process.env.INITIAL_ADMIN_EMAIL || "admin-test@innovaherb.com";
const password = process.env.INITIAL_ADMIN_PASSWORD || "InnovaHerbAdmin!2026";

if (!url || !serviceRoleKey) {
  throw new Error("Supabase environment variables are missing.");
}

const supabase = createClient(url, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

const { data: existingUsers } = await supabase.auth.admin.listUsers();
const existing = existingUsers.users.find((user) => user.email === email);

let userId = existing?.id;

if (!userId) {
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      role: "admin",
    },
  });

  if (error) {
    throw error;
  }

  userId = data.user.id;
}

const upsert = await supabase.from("admin_users").upsert({
  user_id: userId,
  email,
  full_name: "InnoVAherb Test Admin",
  role: "admin",
  is_temporary_password: true,
});

if (upsert.error) {
  throw upsert.error;
}

console.log(`Seeded admin user: ${email}`);
