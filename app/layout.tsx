import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

import { Fredoka, Nunito } from "next/font/google"

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
})

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
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
      <body className={`${fredoka.variable} ${nunito.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
