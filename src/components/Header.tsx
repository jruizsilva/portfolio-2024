import {
  Container,
  Group,
  Burger,
  Button,
  Indicator,
  Text,
  Box,
} from "@mantine/core";
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
      variant={pathname === link ? "light" : "transparent"}
      to={link}
      size="xs"
    >
      {label}
    </Button>
  ));

  return (
    <header>
      <Container size="lg">
        <Group h={"10vh"} gap={0} py={"sm"}>
          <Indicator
            c={"green"}
            color="green"
            processing
            withBorder
            offset={0}
          />
          <Text c={"dimmed"} size="xs" ml={"xs"}>
            Open to work
          </Text>
          <Group mx={"auto"} gap={5} visibleFrom="xs">
            {items}
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Group>
      </Container>
    </header>
  );
}
