import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { OrderProvider } from "@/stores/order.context";
import { CartProvider } from "@/stores/cart.context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sticker Designer",
  description: "Created by Ayush Juyal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ ORDER CONTEXT WRAPPED HERE */}
        <OrderProvider>
          <CartProvider>{children}</CartProvider>
        </OrderProvider>

        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
