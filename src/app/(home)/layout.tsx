import { Footer } from "app/components/shared/Footer";
import { Navbar } from "app/components/shared/Navbar";

import "app/styles/globals.scss";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="content">{children}</main>
      <Footer />
    </>
  );
}
