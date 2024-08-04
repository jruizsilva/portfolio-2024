import { Card, Title, Stack, Group, Button, Text } from "@mantine/core";
import {
  IconMail,
  IconBrandWhatsapp,
  IconMapPin,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandYoutubeFilled,
  IconBrandGithubFilled,
} from "@tabler/icons-react";

interface Props {}

export default function ContactCard(_props: Props): JSX.Element {
  return (
    <>
      <Card p={"xl"} bg={"transparent"}>
        <Title order={1} c={"blue"}>
          Información de contacto
        </Title>
        <Text c={"dimmed"} mb={"xl"}>
          Puedes contactarme a través de las siguientes plataformas 👇
        </Text>
        <Stack gap={"lg"} mb={"xl"}>
          <Group gap={"xs"}>
            <IconMail />
            <Text fw={500}>ruizsilvajonathan@gmail.com</Text>
          </Group>
          <Group gap={"xs"}>
            <IconBrandWhatsapp />
            <Text fw={500}>+54 1127914178</Text>
          </Group>
          <Group gap={"xs"}>
            <IconMapPin />
            <Text fw={500}>Buenos Aires, Argentina</Text>
          </Group>
        </Stack>
        <Group gap={"lg"}>
          <Button
            component="a"
            href="https://github.com/jruizsilva"
            target="_blank"
            variant="subtle"
            h={"48px"}
            w={"48px"}
            radius={"100%"}
            p={0}
          >
            <IconBrandGithub size={26} />
          </Button>
          <Button
            component="a"
            href="https://www.linkedin.com/in/jruizsilva/"
            target="_blank"
            variant="subtle"
            h={"48px"}
            w={"48px"}
            radius={"100%"}
            p={0}
          >
            <IconBrandLinkedin size={26} />
          </Button>
          <Button
            component="a"
            href="https://www.youtube.com/channel/UCab8243KJueYWMawjzcm8VA"
            target="_blank"
            variant="subtle"
            h={"48px"}
            w={"48px"}
            radius={"100%"}
            p={0}
          >
            <IconBrandYoutube size={26} />
          </Button>
          <Button
            component="a"
            href="https://www.instagram.com/jonathanruizsilva"
            target="_blank"
            variant="subtle"
            h={"48px"}
            w={"48px"}
            radius={"100%"}
            p={0}
          >
            <IconBrandInstagram size={26} />
          </Button>
        </Group>
      </Card>
    </>
  );
}
