import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Background from "./components/Background";
import SpotlightCursor from "./components/SpotlightCursor";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="relative min-h-screen text-white selection:bg-cyan-400/30">
      <div className="noise-overlay" />
      <SpotlightCursor />
      <Background />
      <Navbar />
      
      <main className="relative z-10">
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </main>
    </div>
  );
};

export default App;
