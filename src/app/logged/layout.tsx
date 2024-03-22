import NavbarLogged from "app/components/shared/Navbar/NavbarLogged";
import "app/styles/globals.scss";

export default function LoggedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarLogged />
      <main className="content">{children}</main>
    </>
  );
}
