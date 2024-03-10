import type { Metadata } from "next"
import { Footer } from 'app/components/shared/Footer'
import { HeaderComponent } from "app/components/shared/Header";
import { lexend, roboto, rubik } from "app/utils/fonts";

import "app/styles/globals.scss";

export const metadata: Metadata = {
  title: "IdioMind",
  description: "Inmersive language learning",
  icons: {icon: "/appLogo.svg"},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {`${rubik} ${lexend} ${roboto}`}>
        <HeaderComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
