import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankit Soni | Enterprise UX Architect",
  description:
    "Portfolio of Ankit Soni, Lead UI/UX Designer & Developer focused on enterprise UX architecture and low-code platform execution."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
