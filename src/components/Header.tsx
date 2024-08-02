import { Container, Group, Burger, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const links = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

export default function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Button key={link.label} variant="subtle">
      {link.label}
    </Button>
  ));

  return (
    <header>
      <Container size="md">
        <Group h={60}>
          <Group ml={"auto"} gap={5} visibleFrom="xs">
            {items}
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Group>
      </Container>
    </header>
  );
}
