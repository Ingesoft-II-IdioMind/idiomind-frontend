import type { Metadata } from "next";
import { Footer } from "app/components/shared/Footer";
import { Navbar } from "app/components/shared/Navbar";
import { lexend, roboto, rubik } from "app/utils/fonts";
import localFont from 'next/font/local'

import "app/styles/globals.scss";

const myFont = localFont({
  src: '../../public/fonts/Lexend-VariableFont_wght.ttf',
})


export const metadata: Metadata = {
  title: "IdioMind",
  description: "Inmersive language learning",
  icons: { icon: "/appLogo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Navbar />
         <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
