import React from "react";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import Contacts from "./pages/contact/contacts";
import CertificatationTraining from "./pages/certifications-training";
import Footer from "./components/footer";

function App(): React.ReactElement {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-x-hidden
        scroll-smooth
        bg-gray-50
        text-gray-900
        transition-colors
        duration-300
        dark:bg-[#050b14]
        dark:text-white
      "
    >
      {/* Global background glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-6rem]
          top-20
          h-64
          w-64
          rounded-full
          bg-orange-500/10
          blur-[100px]
          sm:right-[-4rem]
          sm:h-80
          sm:w-80
          dark:bg-orange-500/20
          lg:right-32
          lg:h-96
          lg:w-96
          lg:blur-[120px]
        "
      />

      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="certifications-training">
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