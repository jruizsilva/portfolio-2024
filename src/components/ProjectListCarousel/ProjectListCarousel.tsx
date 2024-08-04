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
import { blogImages } from "../../assets";

interface CardProps {
  title: string;
  category: string;
  description: string;
  frontend: string[];
  backend: string[];
}

function CardCustom({
  title,
  category,
  description,
  frontend,
  backend,
}: CardProps) {
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
          <Text c={"dimmed"}>{description}</Text>
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
        <SimpleGrid cols={3} spacing={"xs"}>
          {blogImages.map((image) => (
            <Image src={image} key={image} radius="sm" />
          ))}
        </SimpleGrid>
      </Card.Section>
      <Card.Section mt={"auto"} ml={"auto"}>
        <Button
          component="a"
          target="_blank"
          href="https://www.youtube.com/playlist?list=PLagd0UOW2HkDr_gzINM7IcvsRCaEoVWrd"
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
    category: "Youtube",
    title: "Curso practico Laravel 11 React",
    description:
      "Desarrollé un curso práctico donde enseño a crear una aplicación de blog completa. Utilicé Laravel para construir una API Restful, React.js y Typescript para el frontend, y MySQL para la base de datos. Durante el curso, guío a los estudiantes a través del desarrollo full-stack, aplicando buenas prácticas y utilizando herramientas modernas como Mantine para la creación de interfaces de usuario.",
    frontend: ["Typescript", "React", "Mantine"],
    backend: ["PHP", "Laravel", "MySQL"],
  },
  {
    title: "InmobiliariaRS",
    category: "Freelance",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    frontend: ["Typescript", "React", "ChakraUI"],
    backend: ["PHP", "Laravel", "MySQL"],
  },
  {
    title: "Clon red social",
    category: "Proyecto personal",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    frontend: ["Typescript", "React"],
    backend: ["PHP", "Laravel", "MySQL"],
  },
  {
    title: "Chat",
    category: "Proyecto personal",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
