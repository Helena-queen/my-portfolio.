
import React from "react";
import {
  GraduationCap,
  MapPin,
  Briefcase,
  Code2,
  Sparkles,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

function About(): React.ReactElement {
  const shouldReduceMotion = useReducedMotion();

  const sectionHeading: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const leftCard: Variants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const rightCard: Variants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const statsContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const statItem: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
      scale: shouldReduceMotion ? 1 : 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const infoContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const infoItem: Variants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="about"
      className="
        relative
        mx-auto
        max-w-7xl
        px-4
        py-16
        text-zinc-900
        sm:px-6
        sm:py-20
        lg:px-8
        dark:text-white
      "
    >
      {/* Section Heading */}
      <motion.div
        variants={sectionHeading}
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
          About Me
        </h2>

        <motion.div
          initial={{
            scaleX: shouldReduceMotion ? 1 : 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: shouldReduceMotion ? 0.2 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-4
            h-1
            w-24
            origin-center
            rounded-full
            bg-gradient-to-r
            from-orange-400
            to-orange-600
            sm:w-28
          "
        />
      </motion.div>

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">

        {/* About Description */}
        <motion.div
          variants={leftCard}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          whileHover={
            shouldReduceMotion
              ? undefined
              : {
                  y: -5,
                }
          }
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          className="
            rounded-3xl
            border
            border-zinc-200
            bg-white/80
            p-5
            shadow-sm
            backdrop-blur-xl
            transition-shadow
            duration-300
            hover:shadow-xl
            hover:shadow-orange-500/5
            sm:p-8
            dark:border-zinc-800
            dark:bg-[#0b111d]/70
            dark:shadow-none
            dark:hover:shadow-orange-500/5
          "
        >
          <h3
            className="
              mb-6
              text-2xl
              font-bold
              leading-tight
              sm:text-3xl
            "
          >
            Building With The Bigger Picture In Mind
          </h3>

          <p
            className="
              text-base
              leading-7
              text-zinc-600
              sm:text-lg
              sm:leading-8
              dark:text-zinc-300
            "
          >
            I approach software as more than code on a screen. Caring about
            understanding the problem, building the right solution, and making
            sure it continues to work when real users start depending on it,
            is my top priority.

            <br />
            <br />

            On the development side, I build{" "}
            <span className="font-semibold text-orange-500 dark:text-orange-400">
              React, TypeScript, Next.js and Tailwind CSS
            </span>{" "}
            applications, backed by solutions built with{" "}
            <span className="font-semibold text-orange-500 dark:text-orange-400">
              Node.js, .NET and MongoDB.
            </span>

            <br />
            <br />

            But building is only part of the job. I think about{" "}
            <span className="font-semibold text-orange-500 dark:text-orange-400">
              what could go wrong, how users will experience the product, and
              whether we're solving the right problem in the first place.
            </span>{" "}
            That mindset allows me to contribute across development, technical
            QA, and product delivery — helping turn requirements into software
            that is reliable, usable, and worth building.
          </p>

          {/* Statistics */}
          <motion.div
            variants={statsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="
              mt-8
              grid
              grid-cols-2
              gap-3
              sm:mt-10
              sm:gap-6
            "
          >
            {/* Projects */}
            <motion.div
              variants={statItem}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.03,
                      y: -3,
                    }
              }
              className="
                rounded-2xl
                bg-zinc-100
                p-4
                text-center
                transition-shadow
                duration-300
                hover:shadow-md
                hover:shadow-orange-500/10
                sm:p-5
                dark:bg-zinc-900/70
              "
            >
              <h4
                className="
                  text-3xl
                  font-bold
                  text-orange-500
                  sm:text-4xl
                  dark:text-orange-400
                "
              >
                8+
              </h4>

              <p
                className="
                  mt-2
                  text-sm
                  text-zinc-500
                  sm:text-base
                  dark:text-zinc-400
                "
              >
                Projects
              </p>
            </motion.div>

            {/* Years */}
            <motion.div
              variants={statItem}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.03,
                      y: -3,
                    }
              }
              className="
                rounded-2xl
                bg-zinc-100
                p-4
                text-center
                transition-shadow
                duration-300
                hover:shadow-md
                hover:shadow-orange-500/10
                sm:p-5
                dark:bg-zinc-900/70
              "
            >
              <h4
                className="
                  text-3xl
                  font-bold
                  text-orange-500
                  sm:text-4xl
                  dark:text-orange-400
                "
              >
                3+
              </h4>

              <p
                className="
                  mt-2
                  text-sm
                  text-zinc-500
                  sm:text-base
                  dark:text-zinc-400
                "
              >
                Years Learning
              </p>
            </motion.div>

            {/* Dedication */}
            <motion.div
              variants={statItem}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.03,
                      y: -3,
                    }
              }
              className="
                rounded-2xl
                bg-zinc-100
                p-4
                text-center
                transition-shadow
                duration-300
                hover:shadow-md
                hover:shadow-orange-500/10
                sm:p-5
                dark:bg-zinc-900/70
              "
            >
              <h4
                className="
                  text-3xl
                  font-bold
                  text-orange-500
                  sm:text-4xl
                  dark:text-orange-400
                "
              >
                100%
              </h4>

              <p
                className="
                  mt-2
                  text-sm
                  text-zinc-500
                  sm:text-base
                  dark:text-zinc-400
                "
              >
                Dedication
              </p>
            </motion.div>

            {/* Curiosity */}
            <motion.div
              variants={statItem}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.03,
                      y: -3,
                    }
              }
              className="
                rounded-2xl
                bg-zinc-100
                p-4
                text-center
                transition-shadow
                duration-300
                hover:shadow-md
                hover:shadow-orange-500/10
                sm:p-5
                dark:bg-zinc-900/70
              "
            >
              <h4
                className="
                  text-3xl
                  font-bold
                  text-orange-500
                  sm:text-4xl
                  dark:text-orange-400
                "
              >
                ∞
              </h4>

              <p
                className="
                  mt-2
                  text-sm
                  text-zinc-500
                  sm:text-base
                  dark:text-zinc-400
                "
              >
                Curiosity
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Quick Information */}
        <motion.div
          variants={rightCard}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          whileHover={
            shouldReduceMotion
              ? undefined
              : {
                  y: -5,
                }
          }
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          className="
            rounded-3xl
            border
            border-zinc-200
            bg-white/80
            p-5
            shadow-sm
            backdrop-blur-xl
            transition-shadow
            duration-300
            hover:shadow-xl
            hover:shadow-orange-500/5
            sm:p-8
            dark:border-zinc-800
            dark:bg-[#0b111d]/70
            dark:shadow-none
            dark:hover:shadow-orange-500/5
          "
        >
          <h3
            className="
              mb-8
              text-2xl
              font-bold
              sm:text-3xl
            "
          >
            Quick Information
          </h3>

          <motion.div
            variants={infoContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="space-y-6"
          >
            {/* Location */}
            <motion.div
              variants={infoItem}
              className="flex items-start gap-4 sm:gap-5"
            >
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotate: 8,
                        scale: 1.08,
                      }
                }
                className="
                  shrink-0
                  rounded-xl
                  bg-orange-500/10
                  p-3
                "
              >
                <MapPin
                  className="text-orange-500 dark:text-orange-400"
                  size={22}
                />
              </motion.div>

              <div className="min-w-0">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Location
                </p>

                <p className="font-medium">
                  Nigeria
                </p>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              variants={infoItem}
              className="flex items-start gap-4 sm:gap-5"
            >
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotate: -8,
                        scale: 1.08,
                      }
                }
                className="
                  shrink-0
                  rounded-xl
                  bg-orange-500/10
                  p-3
                "
              >
                <GraduationCap
                  className="text-orange-500 dark:text-orange-400"
                  size={22}
                />
              </motion.div>

              <div className="min-w-0">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Education
                </p>

                <p className="font-medium leading-6">
                  B.Sc. Industrial and Production Engineering, Lagos State
                  University
                </p>
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={infoItem}
              className="flex items-start gap-4 sm:gap-5"
            >
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotate: 8,
                        scale: 1.08,
                      }
                }
                className="
                  shrink-0
                  rounded-xl
                  bg-orange-500/10
                  p-3
                "
              >
                <Briefcase
                  className="text-orange-500 dark:text-orange-400"
                  size={22}
                />
              </motion.div>

              <div className="min-w-0">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Availability
                </p>

                <p className="font-medium text-green-600 dark:text-green-400">
                  Open to Opportunities
                </p>
              </div>
            </motion.div>

            {/* Stack */}
            <motion.div
              variants={infoItem}
              className="flex items-start gap-4 sm:gap-5"
            >
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotate: -8,
                        scale: 1.08,
                      }
                }
                className="
                  shrink-0
                  rounded-xl
                  bg-orange-500/10
                  p-3
                "
              >
                <Code2
                  className="text-orange-500 dark:text-orange-400"
                  size={22}
                />
              </motion.div>

              <div className="min-w-0">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Stack
                </p>

                <p className="font-medium leading-6">
                  React • Next.js • Node.js • .NET
                </p>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              variants={infoItem}
              className="flex items-start gap-4 sm:gap-5"
            >
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotate: 8,
                        scale: 1.08,
                      }
                }
                className="
                  shrink-0
                  rounded-xl
                  bg-orange-500/10
                  p-3
                "
              >
                <Sparkles
                  className="text-orange-500 dark:text-orange-400"
                  size={22}
                />
              </motion.div>

              <div className="min-w-0">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Interests
                </p>

                <p className="font-medium leading-6">
                  AI • Web Development • Project Management • QA Engineering
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

