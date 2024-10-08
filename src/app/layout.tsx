import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import ClientWrapper from "@/lib/ClientWrapper/ClientWrapper";


export const metadata: Metadata = {
  title: "Chef",
  description: "Recipe Sharing Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>
     <ClientWrapper>
      {children}
     </ClientWrapper>
      </body>
    </html>
  );
}
