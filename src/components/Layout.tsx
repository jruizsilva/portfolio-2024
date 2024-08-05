import { Outlet } from "react-router-dom";
import { Container } from "@mantine/core";
import Navbar from "./Layout2";

interface Props {}

export default function Layout(_props: Props): JSX.Element {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Container size="lg" h={"90vh"}>
        <Outlet />
      </Container>
    </>
  );
}
