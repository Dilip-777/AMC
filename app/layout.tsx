"use client";
import "./globals.css";
import "./data-tables-css.css";
// import "./satoshi.css";
import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import Provider from "./_trpc/Provider";
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
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-black">
                    <Provider>{children}</Provider>
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
