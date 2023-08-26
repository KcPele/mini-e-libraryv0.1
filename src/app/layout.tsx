import Navbar from "@/component/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E Books",
  description: "Online E-Books Library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        {/* <div className="absolute  inset-0"> */}

        <Navbar />
        {/* </div> */}

        <div className="">{children}</div>
      </body>
    </html>
  );
}
