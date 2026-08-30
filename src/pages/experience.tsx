import React from "react";
import {
  Briefcase,
  CalendarDays,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const experiences = [
  {
    title: "Frontend Instructor",
    company: "Bafuto Institute of Technology",
    duration: "2024 - 2025",
    location: "Nigeria",
    description:
      "Teaching and mentoring aspiring developers in frontend development through practical, project-based learning.",

    highlights: [
      "Taught frontend development concepts including HTML, CSS, JavaScript, and React.",
      "Guided learners through hands-on projects to strengthen their understanding of modern frontend development.",
      "Created and delivered practical lessons focused on responsive web design, user interfaces, and development best practices.",
      "Mentored students through coding challenges, debugging, and project development.",
    ],

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
    ],
  },

  {
    title: "Frontend Developer",
    company: "Elsoft Tech Hub",
    duration: "2024 - Present",
    location: "Nigeria",
    description:
      "Designing and developing modern web applications using frontend technologies while delivering scalable and responsive solutions.",

    highlights: [
      "Developing responsive and scalable web interfaces for the ESMA School Management Application using React, TypeScript, and Tailwind CSS.",
      "Leading a frontend development team, coordinating tasks, reviewing implementations, and ensuring consistent development standards.",
      "Building and integrating reusable UI components and frontend features across multiple modules of the application.",
      "Collaborating with backend developers and QA to integrate APIs, troubleshoot issues, and ensure smooth feature delivery.",
      "Participating in testing, debugging, and improving application functionality to deliver reliable user experiences.",
    ],

    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
    ],
  },

  {
    title: "Technical QA Engineer",
    company: "ESMA Project",
    duration: "2026",
    location: "Remote",
    description:
      "Responsible for ensuring software quality through comprehensive testing, documenting bugs, validating API endpoints and collaborating closely with developers.",

    highlights: [
      "Performed API testing using Swagger and Bruno.",
      "Prepared QA documentation and test cases.",
      "Verified frontend-backend integrations.",
      "Reported and tracked defects until resolution.",
    ],

    tech: [
      "Swagger",
      "Bruno",
      "REST APIs",
      "QA",
      "Testing",
      "Documentation",
    ],
  },

  {
    title: "Project Manager",
    company: "Software Development Team",
    duration: "2026",
    location: "Remote",
    description:
      "Led software projects by coordinating developers, tracking milestones and ensuring timely delivery of project objectives.",

    highlights: [
      "Managed project planning and timelines.",
      "Assigned development tasks.",
      "Communicated with stakeholders.",
      "Monitored project progress and quality.",
    ],

    tech: [
      "Agile",
      "Leadership",
      "Planning",
      "Communication",
    ],
  },
];

/* =====================================================
   ANIMATION VARIANTS
===================================================== */

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const timelineVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
    y: 20,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const dotVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

const contentVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 12,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const techVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

/* =====================================================
   EXPERIENCE COMPONENT
===================================================== */

function Experience(): React.ReactElement {
  const shouldReduceMotion = useReducedMotion();

  /* Reduced-motion variants */

  const reducedHeadingVariants: Variants = shouldReduceMotion
    ? {
        hidden: {
          opacity: 1,
          y: 0,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }
    : headingVariants;

  const reducedTimelineVariants: Variants = shouldReduceMotion
    ? {
        hidden: {},
        visible: {},
      }
    : timelineVariants;

  const reducedCardVariants: Variants = shouldReduceMotion
    ? {
        hidden: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        },
      }
    : cardVariants;

  const reducedDotVariants: Variants = shouldReduceMotion
    ? {
        hidden: {
          opacity: 1,
          scale: 1,
        },
        visible: {
          opacity: 1,
          scale: 1,
        },
      }
    : dotVariants;

  const reducedContentVariants: Variants = shouldReduceMotion
    ? {
        hidden: {},
        visible: {},
      }
    : contentVariants;

  const reducedItemVariants: Variants = shouldReduceMotion
    ? {
        hidden: {
          opacity: 1,
          x: 0,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }
    : itemVariants;

  const reducedTechVariants: Variants = shouldReduceMotion
    ? {
        hidden: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      }
    : techVariants;

  return (
    <section
      id="experience"
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
      {/* =====================================================
          SECTION HEADING
      ====================================================== */}

      <motion.div
        variants={reducedHeadingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="
          mb-10
          text-center
          sm:mb-16
        "
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
          Experience
        </h2>

        {/* Animated underline */}

        <motion.div
          initial={
            shouldReduceMotion
              ? {
                  width: "7rem",
                  opacity: 1,
                }
              : {
                  width: 0,
                  opacity: 0,
                }
          }
          whileInView={
            shouldReduceMotion
              ? {
                  width: "7rem",
                  opacity: 1,
                }
              : {
                  width: "7rem",
                  opacity: 1,
                }
          }
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="
            mx-auto
            mt-4
            h-1
            rounded-full
            bg-gradient-to-r
            from-orange-400
            to-orange-600
          "
        />
      </motion.div>

      {/* =====================================================
          TIMELINE
      ====================================================== */}

      <motion.div
        variants={reducedTimelineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        className="
          relative
          ml-3
          border-l-2
          border-orange-500/40
          sm:ml-5
        "
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={`${exp.title}-${index}`}
            variants={reducedCardVariants}
            className="
              relative
              mb-10
              ml-6
              sm:mb-14
              sm:ml-10
              lg:mb-16
            "
          >
            {/* =================================================
                TIMELINE DOT
            ================================================== */}

            <motion.div
              variants={reducedDotVariants}
              className="
                absolute
                -left-[39px]
                top-5
                h-5
                w-5
                rounded-full
                border-4
                border-white
                bg-orange-500
                shadow-md
                shadow-orange-500/30
                sm:-left-[52px]
                sm:h-6
                sm:w-6
                dark:border-[#050b14]
              "
            >
              {/* Small pulse effect */}

              {!shouldReduceMotion && (
                <motion.span
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-orange-500
                  "
                />
              )}
            </motion.div>

            {/* =================================================
                EXPERIENCE CARD
            ================================================== */}

            <motion.div
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -5,
                      transition: {
                        duration: 0.25,
                        ease: "easeOut",
                      },
                    }
              }
              className="
                rounded-3xl
                border
                border-zinc-200
                bg-white/80
                p-5
                shadow-sm
                backdrop-blur-xl
                transition-colors
                duration-300
                hover:border-orange-500/50
                hover:shadow-xl
                hover:shadow-orange-500/10
                sm:p-7
                lg:p-8
                dark:border-zinc-800
                dark:bg-[#0B111D]/70
                dark:shadow-none
              "
            >
              {/* =================================================
                  CARD CONTENT
              ================================================== */}

              <motion.div variants={reducedContentVariants}>
                {/* =================================================
                    HEADER
                ================================================== */}

                <div
                  className="
                    flex
                    flex-col
                    gap-5
                    md:flex-row
                    md:items-start
                    md:justify-between
                    md:gap-6
                  "
                >
                  {/* Job Title */}

                  <motion.div
                    variants={reducedItemVariants}
                    className="min-w-0"
                  >
                    <div className="flex items-start gap-3">
                      <motion.div
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : {
                                rotate: -8,
                                scale: 1.1,
                              }
                        }
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        }}
                        className="shrink-0"
                      >
                        <Briefcase
                          className="
                            mt-1
                            text-orange-500
                            dark:text-orange-400
                          "
                          size={22}
                        />
                      </motion.div>

                      <h3
                        className="
                          text-xl
                          font-bold
                          leading-tight
                          sm:text-2xl
                        "
                      >
                        {exp.title}
                      </h3>
                    </div>

                    <p
                      className="
                        mt-2
                        pl-8
                        text-base
                        font-semibold
                        text-orange-500
                        sm:text-lg
                        dark:text-orange-400
                      "
                    >
                      {exp.company}
                    </p>
                  </motion.div>

                  {/* =================================================
                      DURATION & LOCATION
                  ================================================== */}

                  <motion.div
                    variants={reducedItemVariants}
                    className="
                      space-y-2
                      text-sm
                      text-zinc-500
                      sm:text-base
                      md:shrink-0
                      md:text-right
                      dark:text-zinc-400
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        md:justify-end
                      "
                    >
                      <CalendarDays
                        size={17}
                        className="shrink-0 text-[#47bf65]"
                      />

                      <span>{exp.duration}</span>
                    </div>

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        md:justify-end
                      "
                    >
                      <MapPin
                        size={17}
                        className="shrink-0 text-[#47bf65]"
                      />

                      <span>{exp.location}</span>
                    </div>
                  </motion.div>
                </div>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <motion.p
                  variants={reducedItemVariants}
                  className="
                    mt-6
                    text-base
                    leading-7
                    text-zinc-600
                    sm:mt-8
                    sm:text-lg
                    sm:leading-8
                    dark:text-zinc-300
                  "
                >
                  {exp.description}
                </motion.p>

                {/* =================================================
                    KEY HIGHLIGHTS
                ================================================== */}

                <motion.h4
                  variants={reducedItemVariants}
                  className="
                    mt-7
                    text-base
                    font-semibold
                    sm:mt-8
                    sm:text-lg
                  "
                >
                  Key Highlights
                </motion.h4>

                <motion.ul
                  variants={reducedContentVariants}
                  className="
                    mt-4
                    space-y-3
                    sm:mt-5
                  "
                >
                  {exp.highlights.map((item, i) => (
                    <motion.li
                      key={`${exp.title}-highlight-${i}`}
                      variants={reducedItemVariants}
                      className="
                        flex
                        items-start
                        gap-3
                      "
                    >
                      <motion.div
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : {
                                scale: 1.15,
                              }
                        }
                        className="shrink-0"
                      >
                        <CheckCircle2
                          size={18}
                          className="
                            mt-1
                            text-[#47bf65]
                          "
                        />
                      </motion.div>

                      <span
                        className="
                          text-sm
                          leading-6
                          text-zinc-700
                          sm:text-base
                          sm:leading-7
                          dark:text-zinc-200
                        "
                      >
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* =================================================
                    TECHNOLOGIES
                ================================================== */}

                <motion.div
                  variants={reducedContentVariants}
                  className="
                    mt-7
                    flex
                    flex-wrap
                    gap-2
                    sm:mt-8
                    sm:gap-3
                  "
                >
                  {exp.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      variants={reducedTechVariants}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              y: -3,
                              scale: 1.04,
                            }
                      }
                      whileTap={
                        shouldReduceMotion
                          ? undefined
                          : {
                              scale: 0.96,
                            }
                      }
                      className="
                        cursor-default
                        rounded-full
                        bg-zinc-100
                        px-3
                        py-1.5
                        text-xs
                        text-zinc-700
                        transition-colors
                        duration-300
                        hover:bg-orange-100
                        hover:text-orange-700
                        sm:px-4
                        sm:py-2
                        sm:text-sm
                        dark:bg-[#262626]
                        dark:text-white
                        dark:hover:bg-orange-500/15
                        dark:hover:text-orange-300
                      "
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Experience;