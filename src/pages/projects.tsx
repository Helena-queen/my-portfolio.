
import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "School Management System",
    image: "/projects/esma.png",
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

/* ---------------------------------------
   Framer Motion Variants
---------------------------------------- */

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const projectVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.12,
      ease: "easeOut",
    },
  }),
};

function Projects(): React.ReactElement {
  return (
    <section
      id="projects"
      className="
        mx-auto
        max-w-7xl
        px-4
        py-16
        text-zinc-900
        sm:px-6
        sm:py-20
        lg:px-8
        lg:py-24
        dark:text-white
      "
    >
      {/* Section Heading */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="mb-10 text-center sm:mb-16"
      >
        <h2
          className="
            bg-gradient-to-r
            from-orange-400
            via-orange-500
            to-orange-600
            bg-clip-text
            text-3xl
            font-bold
            text-transparent
            sm:text-4xl
          "
        >
          Featured Projects
        </h2>

        <div
          className="
            mx-auto
            mt-4
            h-1
            w-24
            rounded-full
            bg-gradient-to-r
            from-orange-400
            to-orange-600
            sm:w-28
          "
        />

        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-base
            leading-7
            text-zinc-500
            sm:mt-8
            sm:text-lg
            sm:leading-8
            dark:text-zinc-400
          "
        >
          A selection of projects that demonstrate my experience in
          software development, system architecture, API integration,
          and building scalable applications.
        </p>
      </motion.div>

      {/* Projects */}
      <div className="space-y-16 sm:space-y-20 lg:space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            custom={index}
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className={`
              grid
              items-center
              gap-8
              lg:grid-cols-2
              lg:gap-12
              ${
                index % 2 !== 0
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }
            `}
          >
            {/* Project Image */}
            <div
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-zinc-200
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:border-orange-500/40
                hover:shadow-xl
                hover:shadow-orange-500/10
                dark:border-zinc-800
                dark:bg-[#0B111D]
                dark:shadow-none
              "
            >
              <div
                className="
                  aspect-video
                  w-full
                  overflow-hidden
                  sm:aspect-[16/9]
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>
            </div>

            {/* Project Information */}
            <div className="min-w-0">
              <p
                className="
                  mb-2
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wide
                  text-orange-500
                  sm:mb-3
                  sm:text-base
                  dark:text-orange-400
                "
              >
                Featured Project
              </p>

              <h3
                className="
                  mb-5
                  text-2xl
                  font-bold
                  leading-tight
                  sm:mb-6
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                {project.title}
              </h3>

              {/* Description */}
              <div
                className="
                  rounded-2xl
                  border
                  border-zinc-200
                  bg-zinc-50
                  p-5
                  sm:p-6
                  dark:border-zinc-800
                  dark:bg-[#0B111D]/70
                "
              >
                <p
                  className="
                    text-sm
                    leading-7
                    text-zinc-600
                    sm:text-base
                    sm:leading-8
                    dark:text-zinc-300
                  "
                >
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-2
                  sm:mt-8
                  sm:gap-3
                "
              >
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      bg-zinc-100
                      px-3
                      py-1.5
                      text-xs
                      text-zinc-700
                      sm:px-4
                      sm:py-2
                      sm:text-sm
                      dark:bg-[#262626]
                      dark:text-white
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div
                className="
                  mt-7
                  flex
                  flex-col
                  gap-3
                  sm:mt-10
                  sm:flex-row
                  sm:gap-4
                "
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-zinc-300
                    px-5
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    hover:border-orange-500
                    hover:bg-orange-500/10
                    hover:text-orange-600
                    sm:w-auto
                    sm:px-6
                    sm:text-base
                    dark:border-white
                    dark:hover:text-white
                  "
                >
                  <FaGithub size={18} />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-orange-500
                    to-orange-600
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:from-orange-400
                    hover:to-orange-500
                    sm:w-auto
                    sm:px-6
                    sm:text-base
                  "
                >
                  Live Demo
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

