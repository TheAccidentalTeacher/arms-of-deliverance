import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Arms of Deliverance Learning Series",
  description:
    "Homeschool curriculum resources for Arms of Deliverance by Tricia Goyer — Cultural Workbook, Avionics, and KJV Bible Study.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
