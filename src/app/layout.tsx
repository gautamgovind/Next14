import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ClientSiderProvider from "@/components/ClientSiderProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Learn Next Js",
    template:" %s | Next.js 14"
  },
  description: "Learning next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientSiderProvider>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
        </ClientSiderProvider>
      </body>
    </html>
  );
}
