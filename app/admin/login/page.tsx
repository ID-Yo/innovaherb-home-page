import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Admin Login | InnoVAherb",
  description: "Log in to the InnoVAherb internal admin console for order operations and support.",
  path: "/admin/login",
});

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirectedFrom?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-50 via-warm-50 to-white py-24">
      <Container className="max-w-xl">
        <AdminLoginForm redirectedFrom={params.redirectedFrom} />
      </Container>
    </main>
  );
}
