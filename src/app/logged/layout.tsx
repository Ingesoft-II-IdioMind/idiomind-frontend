import NavbarLogged from "app/components/shared/Navbar/NavbarLogged";


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
