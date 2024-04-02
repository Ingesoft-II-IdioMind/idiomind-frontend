import { RequireAuth } from "app/components/shared/Middleware";
import NavbarLogged from "app/components/shared/Navbar/NavbarLogged";
import "app/styles/globals.scss";
import { Provider } from "react-redux";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {

  return <RequireAuth>{children}</RequireAuth>;
}
