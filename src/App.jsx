import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectTile from "./components/ProjectTile";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <ProjectTile />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
