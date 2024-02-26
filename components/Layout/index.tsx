"use client";
import { Suspense, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Loader from "../common/Loader";
import { Session } from "next-auth";

export default function Layout({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden bg-black">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header
          session={session}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10  ">
            <Suspense fallback={<Loader />}>{children}</Suspense>
          </div>
        </main>
      </div>
    </div>
  );
}
