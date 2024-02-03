"use client";
import { useState, useEffect, Suspense } from "react";
import Loader from "@/components/common/Loader";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import useColorMode from "@/hooks/useColorMode";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [colorMode, setColorMode] = useColorMode();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="bg-boxdark-2 text-bodydark">
          {loading ? (
            <Loader />
          ) : (
            <div className="flex h-screen overflow-hidden">
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <Header
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />

                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-black">
                    <Suspense fallback={<Loader />}>{children}</Suspense>
                  </div>
                </main>
              </div>
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
