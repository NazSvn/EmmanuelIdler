import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectTile from "./components/ProjectTile";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Sides from "./components/Sides";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <NavBar />
        <Sides />
        <div id="content">
          <main id="main">
            <Hero />
            <About />
            <ProjectTile />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
