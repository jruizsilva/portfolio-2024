import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Container } from "@mantine/core";

interface Props {}

export default function Layout(_props: Props): JSX.Element {
  return (
    <>
      <Header />
      <Container size="lg" h={"90vh"}>
        <Outlet />
      </Container>
    </>
  );
}
