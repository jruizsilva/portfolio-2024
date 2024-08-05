import { Title, Button, Text, Image, Center, Flex } from "@mantine/core";
import classes from "./Hero.module.scss";
import image from "../../assets/hero-image.svg";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <Center h={"100%"}>
      <div className={classes.content}>
        <Title className={classes.title}>
          Hola! Soy <span className={classes.highlight}>Jonathan</span>
        </Title>
        <Title c="blue">Desarrollador Web Full Stack</Title>
        <Text c="dimmed" mt="md">
          Como desarrollador full stack, me especializo en crear aplicaciones
          dinámicas y robustas, adaptadas a las necesidades de cada proyecto. Mi
          dominio abarca tecnologías como JavaScript, PHP y MySQL, cuento con
          habilidades en resolución de problemas y autonomía.
        </Text>

        <Flex
          gap={"md"}
          mt={30}
          direction={{
            base: "column",
            xs: "row",
          }}
        >
          <Button component={NavLink} to={"/projects"} radius="xl" size="md">
            Ver proyectos
          </Button>
          <Button
            component="a"
            target="_blank"
            href="https://drive.google.com/file/d/1hdBWokTnDyHaxCCVCUQ0QhsGeV0zdwEc/view?usp=sharing"
            variant="default"
            radius="xl"
            size="md"
          >
            Ver CV
          </Button>
        </Flex>
      </div>
      <Image src={image} className={classes.image} />
    </Center>
  );
}
