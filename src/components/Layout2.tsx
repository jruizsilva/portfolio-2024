import {
  AppShell,
  Group,
  Burger,
  Button,
  Container,
  Indicator,
  Text,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const links = [
  { link: "/", label: "Sobre mi" },
  { link: "/projects", label: "Proyectos" },
  { link: "/contact", label: "Contacto" },
];

interface Props {}

export default function Layout2(_props: Props): JSX.Element {
  const [opened, { toggle }] = useDisclosure();
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
    <>
      <AppShell
        header={{ height: "10vh" }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Container size={"lg"} h={"100%"}>
            <Group h={"100%"} gap={0}>
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
              <Group
                ml={"auto"}
                mr={{
                  md: "auto",
                }}
                gap={5}
                visibleFrom="xs"
              >
                {items}
              </Group>

              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="xs"
                size="sm"
                ml={"auto"}
              />
            </Group>
          </Container>
        </AppShell.Header>

        <AppShell.Navbar py="md" px={4} hiddenFrom="xs">
          <Stack>{items}</Stack>
        </AppShell.Navbar>

        <AppShell.Main p={0} pt={64} h={"100vh"}>
          <Container size="lg" h={"100%"}>
            <Outlet />
          </Container>
        </AppShell.Main>
      </AppShell>
    </>
  );
}
