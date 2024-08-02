import { Container, Title, Button, Group, Text, Image } from "@mantine/core";
import classes from "./Hero.module.scss";
import image from "../../assets/hero-image.svg";

export default function Hero() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Hi! I'm <span className={classes.highlight}>Jonathan</span>
          </Title>
          <Title c="blue">Full stack developer</Title>
          <Text c="dimmed" mt="md">
            Build fully functional accessible web applications faster than ever
            – Mantine includes more than 120 customizable components and hooks
            to cover you in any situation
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
      </div>
    </Container>
  );
}
