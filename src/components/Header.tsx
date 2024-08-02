import { Container, Group, Burger, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { link: "/", label: "Sobre mi" },
  { link: "/projects", label: "Proyectos" },
  { link: "/contact", label: "Contacto" },
];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const { pathname } = useLocation();

  const items = links.map(({ link, label }) => (
    <Button
      key={label}
      component={NavLink}
      variant={pathname === link ? "filled" : "transparent"}
      to={link}
    >
      {label}
    </Button>
  ));

  return (
    <header>
      <Container size="md">
        <Group h={"10vh"}>
          <Group mx={"auto"} gap={5} visibleFrom="xs">
            {items}
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Group>
      </Container>
    </header>
  );
}
