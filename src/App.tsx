import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Contacts from "./pages/contacts";
import CertificatationTraining from "./pages/certifications-training";
import Footer from "./pages/footer";


function App(): React.ReactElement {
  return (
    <div className="relative min-h-screen  bg-[#050b14] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none overflow-hidden absolute top-20 right-32 h-96 w-96 rounded-full bg-orange-500/20 blur-[120px]" />

      <Navbar />

      {/* Hero */}
      <Home />

      {/* Other Sections */}
      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills/>
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="certifications & Training">
        <CertificatationTraining />
      </section>


      <section id="contact">
        <Contacts />
      </section>
      <Footer />
    </div>
  );
}
export default App;