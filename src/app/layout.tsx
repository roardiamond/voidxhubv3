import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoidXHub v3 | Premium Tools Hub",
  description: "Secure premium tools, configs and tournaments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#05050a] text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}
