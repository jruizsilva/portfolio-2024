import { Title, Button, Group, Text, Image, Center } from "@mantine/core";
import classes from "./Hero.module.scss";
import image from "../../assets/hero-image.svg";

export default function Hero() {
  return (
    <Center h={"100%"} py={"xl"}>
      <div className={classes.content}>
        <Title className={classes.title}>
          Hi! I'm <span className={classes.highlight}>Jonathan</span>
        </Title>
        <Title c="blue">Full stack developer</Title>
        <Text c="dimmed" mt="md">
          Como desarrollador full stack, me especializo en crear aplicaciones
          dinámicas y robustas, adaptadas a las necesidades de cada proyecto. Mi
          dominio abarca tecnologías como JavaScript, PHP y MySQL, cuento con
          habilidades en resolución de problemas y autonomía.
        </Text>

        <Group mt={30}>
          <Button radius="xl" size="md" className={classes.control}>
            Ver proyectos
          </Button>
          <Button
            variant="default"
            radius="xl"
            size="md"
            className={classes.control}
          >
            Ver CV
          </Button>
        </Group>
      </div>
      <Image src={image} className={classes.image} />
    </Center>
  );
}
