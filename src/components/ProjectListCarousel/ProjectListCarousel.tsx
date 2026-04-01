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
import { IconBrandGithub, IconLink } from "@tabler/icons-react";
import { blogImages, chatImages, socialImages } from "../../assets";

export interface CardProps {
  title: string;
  category: string;
  description: string;
  frontend: string[];
  backend: string[];
  images: string[];
  github: string;
  link: string;
}

function CardCustom({
  title,
  category,
  description,
  frontend,
  backend,
  images,
  github,
  link,
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
          href={github}
          variant="subtle"
          size="xs"
          leftSection={<IconBrandGithub size={14} />}
        >
          Ver codigo
        </Button>
        <Button
          component="a"
          target="_blank"
          href={link}
          variant="subtle"
          size="xs"
          leftSection={<IconLink size={14} />}
        >
          Enlace
        </Button>
      </Card.Section>
    </Card>
  );
}

const data: CardProps[] = [
  {
    category: "Proyecto personal",
    title: "Blog App",
    description:
      "Aplicación de blog completa. Utilicé Laravel para construir una API Restful, utilice React.js y Typescript para el frontend, y MySQL para la base de datos.",
    frontend: ["Typescript", "React", "Mantine"],
    backend: ["PHP", "Laravel", "MySQL"],
    images: blogImages,
    link: "https://basic-chat-with-websocket-frontend.vercel.app",
    github: "https://github.com/jruizsilva/basic-chat-with-websocket-frontend",
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
    link: "https://github.com/jruizsilva/twitter-clon-devchallenges",
    github: "https://github.com/jruizsilva/twitter-clon-devchallenges",
  },
  {
    title: "Simple Chat App",
    category: "Proyecto personal",
    description:
      "Desarrollar una aplicación web que permite a los usuarios chatear un salas publicas o privadas",
    frontend: ["Typescript", "React", "ChakraUI"],
    backend: ["Java", "Spring Boot 3", "H2"],
    images: chatImages,
    link: "https://basic-chat-with-websocket-frontend.vercel.app",
    github: "https://github.com/jruizsilva/basic-chat-with-websocket-frontend",
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
