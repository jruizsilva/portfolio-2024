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
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";
import ContactCard from "../components/ContactCard/ContactCard";

interface Props {}

export default function ContactPage(_props: Props): JSX.Element {
  return (
    <>
      <Center h={"100%"}>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <ContactCard />
          <Image src={image} />
        </SimpleGrid>
      </Center>
    </>
  );
}
