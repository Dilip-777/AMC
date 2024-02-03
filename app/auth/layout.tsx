"use client";
import useColorMode from "@/hooks/useColorMode";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
