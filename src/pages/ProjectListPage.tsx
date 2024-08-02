import { Stack } from "@mantine/core";
import ProjectListCarousel from "../components/ProjectListCarousel/ProjectListCarousel";

interface Props {}

export default function ProjectListPage(_props: Props): JSX.Element {
  return (
    <>
      <Stack h={"90vh"}>
        <ProjectListCarousel />
      </Stack>
    </>
  );
}
