import type { Metadata } from "next";
//import { lexend, roboto, rubik } from "app/utils/fonts";
import { Lexend, Quicksand, Rubik } from "next/font/google";
import "app/styles/globals.scss";
import { SmoothScrolling } from "app/components/shared/Scroller";
import Provider from "../redux/provider";
import { useAppSelector } from "app/redux/hooks";


const myFont3 = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

const myFont2 = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
});

const myFont4 = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

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
      <body
        className={`${myFont2.variable} ${myFont3.variable} ${myFont4.variable}`}
      >
      <SmoothScrolling>
        <Provider>

        {children}
        </Provider>
      </SmoothScrolling>
      </body>
    </html>
  );
}
