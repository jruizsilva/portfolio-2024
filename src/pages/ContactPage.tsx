import { Center, Image, SimpleGrid } from "@mantine/core";
import image from "../assets/contact-image.svg";
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
