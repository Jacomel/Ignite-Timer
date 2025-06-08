import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutConteiner } from "./Style";

export function DefaultLayout() {
  return (
    <LayoutConteiner>
      <Header />
      <Outlet />
    </LayoutConteiner>
  );
}
