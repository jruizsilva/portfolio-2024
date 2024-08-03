import { Carousel } from "@mantine/carousel";
import {
  Text,
  Title,
  Button,
  Card,
  Image,
  SimpleGrid,
  Stack,
  Badge,
  Group,
} from "@mantine/core";
import classes from "./ProjectListCarousel.module.scss";
import { IconVideo } from "@tabler/icons-react";

interface CardProps {
  title: string;
  category: string;
  frontend: string[];
  backend: string[];
}
const images = [
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png",
];

function CardCustom({ title, category, frontend, backend }: CardProps) {
  return (
    <Card shadow="md" p="xl" radius="md" h={"100%"}>
      <Card.Section mb={"md"}>
        <Stack gap={2}>
          <Text tt={"uppercase"} c={"blue"} fw={"bold"} size="xs">
            {category}
          </Text>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
          <Text c={"dimmed"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
            recusandae, necessitatibus quia explicabo officiis architecto eos
            dicta exercitationem sapiente, voluptates pariatur, autem modi rem
            vitae temporibus. Aspernatur, recusandae laudantium.
          </Text>
        </Stack>
      </Card.Section>
      <Card.Section mb={"lg"}>
        <SimpleGrid cols={{ base: 1 }}>
          <Group gap={"xs"}>
            {frontend.map((tech, index) => (
              <Badge variant="dot" key={index}>
                {tech}
              </Badge>
            ))}
            {backend.map((tech, index) => (
              <Badge variant="dot" color="pink" key={index}>
                {tech}
              </Badge>
            ))}
          </Group>
        </SimpleGrid>
      </Card.Section>

      <Card.Section mb={"lg"}>
        <SimpleGrid cols={3}>
          {images.map((image) => (
            <Image src={image} key={image} radius="sm" />
          ))}
        </SimpleGrid>
      </Card.Section>
      <Card.Section mt={"auto"} ml={"auto"}>
        <Button
          variant="subtle"
          size="xs"
          leftSection={<IconVideo size={14} />}
        >
          Ver demo
        </Button>
      </Card.Section>
    </Card>
  );
}

const data = [
  {
    title: "InmobiliariaRS",
    category: "Freelance",
    frontend: ["Typescript", "React"],
    backend: ["PHP", "Laravel", "MySQL"],
  },
  {
    title: "Hawaii beaches review: better than you think",
    category: "Proyecto personal",
    frontend: ["Typescript", "React"],
    backend: ["PHP", "Laravel", "MySQL"],
  },
  {
    title: "Mountains at night: 12 best locations to enjoy the view",
    category: "Proyecto personal",
    frontend: ["Typescript", "React"],
    backend: ["PHP", "Laravel", "MySQL"],
  },
];

export default function ProjectListCarousel() {
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title} pt={25} pb={50}>
      <CardCustom {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      draggable={false}
      slideSize={"92%"}
      slideGap={40}
      // height="100%"
      // style={{ flex: 1 }}
      align={"center"}
    >
      {slides}
    </Carousel>
  );
}
