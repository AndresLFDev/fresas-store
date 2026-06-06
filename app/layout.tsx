import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

import { Fredoka } from "next/font/google"

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Delifresas",
  description: "Las mejores fresas frescas a tu puerta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={fredoka.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
