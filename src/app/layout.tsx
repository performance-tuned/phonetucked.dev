import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "macro economic protocols",
  description: "an index of builds and galleries by phonetucked.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
