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
import { blogImages, chatImages, socialImages } from "../../assets";

interface CardProps {
  title: string;
  category: string;
  description: string;
  frontend: string[];
  backend: string[];
  images: string[];
  url: string;
}

function CardCustom({
  title,
  category,
  description,
  frontend,
  backend,
  images,
  url,
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
          {images.map((image) => (
            <Image src={image} key={image} radius="sm" />
          ))}
        </SimpleGrid>
      </Card.Section>
      <Card.Section mt={"auto"} ml={"auto"}>
        <Button
          component="a"
          target="_blank"
          href={url}
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
    images: blogImages,
    url: "https://youtu.be/jxcwokCM2M0?si=RHRN7qiKB8An8SIK&t=16",
  },
  // {
  //   title: "InmobiliariaRS",
  //   category: "Freelance",
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //   frontend: ["Typescript", "React", "ChakraUI"],
  //   backend: ["PHP", "Laravel", "MySQL"],
  //   images: blogImages,
  // },
  {
    title: "Clon red social",
    category: "Proyecto personal",
    description:
      "Desarrollar una aplicación que permite a los usuarios publicar posts, comentar, dar likes a posts o comentarios, guardar posts, seguir usuarios. Subir imagenes de perfil y de fondo, editar los datos del usuario",
    frontend: ["Typescript", "React", "ChakraUI"],
    backend: ["Java", "Spring Boot 3", "H2"],
    images: socialImages,
    url: "https://www.youtube.com/watch?v=ajCkEWhbnkQ&ab_channel=JonathanRuizSilva",
  },
  {
    title: "Simple Chat App",
    category: "Proyecto personal",
    description:
      "Desarrollar una aplicación web que permite a los usuarios chatear un salas publicas o privadas",
    frontend: ["Typescript", "React", "ChakraUI"],
    backend: ["Java", "Spring Boot 3", "H2"],
    images: chatImages,
    url: "https://www.youtube.com/watch?v=s1oYghlDoOs&ab_channel=JonathanRuizSilva",
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
