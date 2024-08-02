import { Outlet } from "react-router-dom";
import Header from "./Header";

interface Props {}

export default function Layout(_props: Props): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
