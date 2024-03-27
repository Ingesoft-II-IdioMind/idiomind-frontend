import { RequireAuth } from "app/components/shared/Middleware";
import NavbarLogged from "app/components/shared/Navbar/NavbarLogged";
import "app/styles/globals.scss";
import { Provider } from "react-redux";

export default function LoggedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <RequireAuth> */}
        <NavbarLogged />

        <main className="content">{children}</main>
      {/* </RequireAuth> */}
    </>
  );
}
