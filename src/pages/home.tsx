
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import BackgroundDecoration from "../components/BackgroundDecoration";
import profile from "../assets/profile.jpg";

import {
  ArrowDown,
  Download,
  Mail,
} from "lucide-react";

function Home() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number): Variants => ({
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  });

  const buttonAnimation: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        delay: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-gray-50
        pt-20
        text-gray-900
        transition-colors
        duration-300
        dark:bg-[#09090f]
        dark:text-white
      "
    >
      <BackgroundDecoration />

      <section
        className="
          relative
          z-10
          flex
          min-h-[calc(100vh-5rem)]
          items-center
          justify-center
          px-4
          py-12
          sm:px-6
          sm:py-16
        "
      >
        <div
          className="
            mb-8
            w-full
            max-w-4xl
            text-center
            sm:mb-14
          "
        >
          {/* Profile Image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.8,
              y: shouldReduceMotion ? 0 : 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              mx-auto
              h-40
              w-40
              sm:h-48
              sm:w-48
              md:h-52
              md:w-52
            "
          >
            {/* Glow */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.08, 1],
                      opacity: [0.5, 0.75, 0.5],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              className="
                absolute
                inset-0
                rounded-full
                bg-orange-500/10
                blur-3xl
                dark:bg-orange-500/20
              "
            />

            {/* Profile */}
            <motion.img
              src={profile}
              alt="Helen Opute"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -6, 0],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              className="
                relative
                h-full
                w-full
                rounded-full
                object-cover
                shadow-xl
                shadow-orange-500/10
              "
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp(0.15)}
            initial="hidden"
            animate="visible"
            className="
              mt-6
              bg-gradient-to-r
              from-orange-400
              via-orange-500
              to-orange-700
              bg-clip-text
              text-4xl
              font-extrabold
              leading-tight
              text-transparent
              sm:mt-8
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Helen Opute
          </motion.h1>

          {/* Roles */}
          <motion.p
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className="
              mx-auto
              mt-4
              max-w-3xl
              text-base
              leading-7
              text-gray-700
              sm:text-lg
              sm:leading-8
              md:text-2xl
              dark:text-zinc-300
            "
          >
            Frontend Developer{" "}
            <span className="text-orange-500 dark:text-orange-400">
              |
            </span>{" "}
            Backend Developer{" "}
            <span className="text-orange-500 dark:text-orange-400">
              |
            </span>{" "}
            Technical QA Engineer
          </motion.p>

          {/* Introduction */}
          <motion.p
            variants={fadeUp(0.45)}
            initial="hidden"
            animate="visible"
            className="
              mx-auto
              mt-6
              max-w-2xl
              px-2
              text-base
              leading-7
              text-gray-600
              sm:mt-8
              sm:px-0
              sm:text-lg
              sm:leading-8
              dark:text-zinc-400
            "
          >
            I turn complex ideas into reliable software —
            building the solution, challenging what could
            break it, and keeping the product aligned with
            the people and business it serves.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonAnimation}
            initial="hidden"
            animate="visible"
            className="
              mx-auto
              mt-8
              flex
              w-full
              max-w-md
              flex-col
              justify-center
              gap-3
              sm:mt-10
              sm:max-w-none
              sm:flex-row
              sm:gap-4
            "
          >
            {/* Download CV */}
            <motion.button
              type="button"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.04,
                      y: -2,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 0.97,
                    }
              }
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 18,
              }}
              className="
                group
                relative
                w-full
                overflow-hidden
                rounded-xl
                px-6
                py-3
                font-semibold
                text-white
                shadow-lg
                shadow-orange-500/20
                sm:w-auto
                sm:px-8
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-orange-600
                  via-orange-500
                  to-orange-700
                  bg-[length:200%_100%]
                  transition-all
                  duration-700
                  group-hover:bg-[position:100%_0]
                "
              />

              <span className="relative flex items-center justify-center">
                <Download
                  size={20}
                  className="mr-3"
                />

                Download CV
              </span>
            </motion.button>

            {/* Contact Me */}
            <motion.a
              href="#contact"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.04,
                      y: -2,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 0.97,
                    }
              }
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 18,
              }}
              className="
                flex
                w-full
                items-center
                justify-center
                rounded-xl
                border
                border-gray-300
                bg-white/70
                px-6
                py-3
                font-semibold
                text-gray-900
                transition-colors
                duration-300
                hover:border-orange-500
                hover:bg-orange-50
                sm:w-auto
                sm:px-8
                dark:border-zinc-700
                dark:bg-zinc-900/60
                dark:text-white
                dark:hover:border-orange-500
                dark:hover:bg-zinc-800
              "
            >
              <Mail
                size={20}
                className="mr-3"
              />

              Contact Me
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.a
            href="#about"
            aria-label="Scroll to About section"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.5,
            }}
            className="inline-block"
          >
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, 8, 0],
                    }
              }
              transition={
                shouldReduceMotion
                  ? undefined
                  : {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.15,
                    }
              }
            >
              <ArrowDown
                size={24}
                className="
                  mx-auto
                  mt-6
                  text-gray-700
                  sm:mt-8
                  dark:text-white
                "
              />
            </motion.div>
          </motion.a>
        </div>
      </section>
    </main>
  );
}

export default Home;

