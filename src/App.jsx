import { useContext } from "react";
import { GlobalContext } from "./context";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectTile from "./components/ProjectTile";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar"; 

function App() {
  const { test, setTest } = useContext(GlobalContext);

  setTest("hello World");
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <div>{test}</div>
      <ProjectTile />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;
