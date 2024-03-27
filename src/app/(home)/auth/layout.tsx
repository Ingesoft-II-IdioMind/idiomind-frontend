import { RequireAuth } from "app/components/shared/Middleware";
import RequireNoAuth from "app/components/shared/Middleware/RequireNoAuth";
import NavbarLogged from "app/components/shared/Navbar/NavbarLogged";
import "app/styles/globals.scss";
import { Provider } from "react-redux";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <RequireNoAuth>
        {children}
      </RequireNoAuth>
    </>
  );
}
