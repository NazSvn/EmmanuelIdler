import { useContext } from "react";
import { GlobalContext } from "./context";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectTile from "./components/ProjectTile";

function App() {
  const { test, setTest } = useContext(GlobalContext);

  setTest("hello World");
  return (
    <>
      <About />
      <div>{test}</div>
      <ProjectTile />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
