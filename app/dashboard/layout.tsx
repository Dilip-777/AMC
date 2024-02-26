import Layout from "@/components/Layout";
import { getServerAuthSession } from "@/server/auth/auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [colorMode, setColorMode] = useColorMode();
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="bg-boxdark-2 text-bodydark pr-1">
          <Layout session={session}>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
