import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "FSSAI Regulation Assistant",
  description: "AI-Powered Search & Regulatory Intelligence Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen bg-[#f8fafb]">{children}</main>
      </body>
    </html>
  );
}
