import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const font = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Joutomaa",
    template: "%s | Joutomaa",
  },
  description: "Joutomaa on arvoton eli maatalouteen ja muuhun taloudelliseen" +
          "hyötykäyttöön sopimaton maa-alue. Metsätaloudessa joutomaa" +
          "määritellään sellaiseksi alueeksi, jossa puun kasvu on alle 0.1 m3" +
          "hehtaaria kohti vuodessa. Käytännössä tämä tarkoittaa aavikoita," +
          "hietikoita ja suoalueita."
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
