import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const font = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JOUTOMAA",
  description: "Joutomaa blogi t joutoväki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={font.className} style={{
        backgroundColor:"black"
      }}>
        <main>
          {children}
        </main>
        </body>
    </html>
  );
}
