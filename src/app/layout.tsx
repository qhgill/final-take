import type { Metadata } from "next";
import "./globals.css";
import { Gelasio } from "next/font/google";
import { Cormorant } from "next/font/google";

const gelasio = Gelasio({ subsets: ["latin"] });
const cormorant = Cormorant({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Final Take",
  description: "Citrus Hack 2025 Project",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${gelasio.className} ${cormorant.className}`}>
        {children}
      </body>
    </html>
  );
}
