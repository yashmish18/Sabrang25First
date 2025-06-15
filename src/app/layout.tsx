import type { Metadata } from "next";
import "./globals.css";
import Background from "../../components/Background";
import  Navbar  from "../../components/Navbar"
import Footer from "../../components/Footer";
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
      <body className="antialiased">
  <Background />
  <div className="relative z-10">
    <Navbar />
    <main>{children}</main>
  </div>
  <Footer />
</body>
    </html>
  );
}
