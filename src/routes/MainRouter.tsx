import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectListPage from "../pages/ProjectListPage";
import ContactPage from "../pages/ContactPage";
import Layout2 from "../components/Layout2";

interface Props {}

export default function MainRouter(_props: Props): JSX.Element {
  return (
    <>
      <Routes>
        <Route element={<Layout2 />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectListPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}
