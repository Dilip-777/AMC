import { getServerAuthSession } from "@/server/auth/auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  if (session) {
    redirect("/dashboard");
  }
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
