import React from "react";
import {
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
} from "react-icons/fa6";

const projects = [
  {
    title: "School Management System",
    image: "/projects/esma.png", // Replace later
    description:
      "A multi-tenant school management platform that streamlines student enrollment, staff management, fee management, academic records, and administrative operations.",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      ".NET",
      "REST API",
      "SQL Server",
    ],

    github: "#",
    demo: "#",
  },

  {
    title: "FitTrack - Fitness Tracking App",
    image: "/projects/fittrack.png",
    description:
      "A modern fitness tracking application that allows users to monitor their workouts, nutrition, and progress over time.",

    technologies: [
      "Next.js",
      "TypeScript",
      ".NET",
      "SQLite",
      "Tailwind",
    ],

    github: "#",
    demo: "#",
  },

  {
    title: "E-commerce Platform",
    image: "/projects/ecommerce.png",
    description:
      "A scalable e-commerce platform that provides a seamless shopping experience, including product listings, shopping cart, payment integration, and order management.",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "API Integration",
    ],

    github: "#",
    demo: "#",
  },
];

function Projects(): React.ReactElement {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-5 text-white"
    >
      {/* Heading */}

      <div className="mb-16 text-center">
        <h2 className="bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 bg-clip-text text-4xl font-bold text-transparent">
          Featured Projects
        </h2>

        <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" />

        <p className="mx-auto mt-8 max-w-3xl text-lg text-zinc-400">
          A selection of projects that demonstrate my experience in
          software development, system architecture, API integration,
          and building scalable applications.
        </p>
      </div>

      {/* Projects */}

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`grid items-center gap-10 lg:grid-cols-2 ${
              index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Screenshot */}

            <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-[#0B111D] transition-all duration-300 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/10">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Details */}

            <div>

              <p className="mb-3 text-orange-400 font-semibold">
                Featured Project
              </p>

              <h3 className="mb-6 text-3xl font-bold">
                {project.title}
              </h3>

              <div className="rounded-2xl border border-zinc-800 bg-[#0B111D]/70 p-6">
                <p className="leading-8 text-zinc-300">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}

              <div className="mt-8 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[#262626] px-4 py-2 text-sm text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}

              <div className="mt-10 flex gap-5">

                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 rounded-xl border border-white px-6 py-3 transition hover:bg-orange-500/10 hover:text-white hover:border-orange-500"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-semibold transition hover:scale-105"
                >
                  Live Demo
                  <ArrowUpRight size={18} />
                </a>

              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;