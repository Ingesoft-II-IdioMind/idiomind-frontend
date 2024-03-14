import { Rubik, Lexend, Roboto } from "next/font/google";


const rubik_init = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
});

const lexend_init = Lexend({
  subsets: ["latin"],
  weight: ["400","500","600","700","800"],
  variable: "--font-lexend",
});

const roboto_init = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const roboto = roboto_init.variable;
export const rubik = rubik_init.variable;
export const lexend = lexend_init.variable;
