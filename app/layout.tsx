import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
