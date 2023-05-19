import "./globals.css";
import { Inter } from "next/font/google";
import LogLib from "@loglib/tracker/react";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LogLib config={{
          debug: true,
          env: "test"
        }} />
        <main>{props.children}</main>
      </body>
    </html>
  );
}