import ECommerce from "@/components/Dashboard/E-commerce";
import useColorMode from "@/hooks/useColorMode";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "TailAdmin | Next.js E-commerce Dashboard Template",
  description: "This is Home Blog page for TailAdmin Next.js",
  // other metadata
};

export default function Home() {
  redirect("/dashboard");
  return (
    <>
      <ECommerce />
    </>
  );
}
