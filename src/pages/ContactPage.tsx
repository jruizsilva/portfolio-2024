import {
  Button,
  Card,
  Center,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import image from "../assets/contact-image.svg";
import {
  IconBrandGithub,
  IconBrandGithubFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";

interface Props {}

export default function ContactPage(_props: Props): JSX.Element {
  return (
    <>
      <Center h={"100%"}>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
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
                variant="subtle"
                h={"48px"}
                w={"48px"}
                radius={"100%"}
                p={0}
              >
                <IconBrandGithub size={26} />
              </Button>
              <Button
                variant="subtle"
                h={"48px"}
                w={"48px"}
                radius={"100%"}
                p={0}
              >
                <IconBrandLinkedin size={26} />
              </Button>
              <Button
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
          <Image src={image} />
        </SimpleGrid>
      </Center>
    </>
  );
}
