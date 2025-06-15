import type { Metadata } from "next";
import "./globals.css";
import Background from "../../components/Background";

export const metadata: Metadata = {
  title: "Sabrang",
  description: "A cosmic carnival themed website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Background />
        {children}
      </body>
    </html>
  );
}
