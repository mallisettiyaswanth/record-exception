import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { Toaster } from "sonner";

const geist_sans = localFont({
  src: "./../../public/geist_sans.woff2",
});

export const metadata: Metadata = {
  title: "Permissions Manager",
  description: "Permissions Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(geist_sans.className)}>
        <Toaster position="top-center" richColors />
        {children}
      </body>
    </html>
  );
}
