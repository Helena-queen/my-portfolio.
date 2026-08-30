
import { useState } from "react";
import {
  Menu,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  type Variants,
} from "framer-motion";

import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const desktopContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.25,
      },
    },
  };

  const desktopItem: Variants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const mobileContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItem: Variants = {
    hidden: {
      opacity: 0,
      x: -15,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
      },
    },
  };

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        left-0
        right-0
        top-0
        z-50
        border-b
        border-gray-200
        bg-white/80
        text-gray-900
        backdrop-blur-md
        transition-colors
        duration-300
        dark:border-zinc-800
        dark:bg-[#050b14]/80
        dark:text-white
      "
    >
      <div
        className="
          mx-auto
          flex
          items-center
          justify-between
          px-5
          py-4
          sm:px-6
          lg:px-12
          xl:px-20
        "
      >
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={closeMenu}
          initial={{
            opacity: 0,
            x: -15,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          whileHover={{
            scale: 1.03,
          }}
          className="
            bg-gradient-to-r
            from-orange-300
            via-orange-500
            to-orange-700
            bg-clip-text
            text-2xl
            font-bold
            text-transparent
          "
        >
          Helen Opute
        </motion.a>

        {/* Desktop Navigation */}
        <motion.ul
          variants={desktopContainer}
          initial="hidden"
          animate="visible"
          className="hidden items-center gap-8 lg:flex"
        >
          {navItems.map((item) => (
            <motion.li
              key={item.label}
              variants={desktopItem}
            >
              <a
                href={item.href}
                className="
                  relative
                  text-lg
                  text-gray-700
                  transition-colors
                  duration-300
                  hover:text-orange-600
                  dark:text-gray-400
                  dark:hover:text-white
                "
              >
                {item.label}

                <span
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-0.5
                    w-0
                    rounded-full
                    bg-orange-500
                    transition-all
                    duration-300
                    hover:w-full
                  "
                />
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Theme Toggle + Mobile Controls */}
        <div className="flex items-center gap-3">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0.4,
            }}
          >
            <ThemeToggle />
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() =>
              setIsMenuOpen((prev) => !prev)
            }
            whileTap={{ scale: 0.9 }}
            className="
              rounded-lg
              p-2
              text-gray-800
              transition-colors
              duration-300
              hover:bg-gray-100
              hover:text-orange-600
              dark:text-gray-200
              dark:hover:bg-zinc-800
              dark:hover:text-orange-400
              lg:hidden
            "
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              overflow-hidden
              border-t
              border-gray-200
              bg-white/95
              dark:border-zinc-800
              dark:bg-[#050b14]/95
              lg:hidden
            "
          >
            <motion.ul
              variants={mobileContainer}
              initial="hidden"
              animate="visible"
              className="space-y-1 px-5 py-4 sm:px-6"
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.label}
                  variants={mobileItem}
                >
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="
                      block
                      rounded-lg
                      px-4
                      py-3
                      text-base
                      text-gray-700
                      transition-colors
                      hover:bg-orange-50
                      hover:text-orange-600
                      dark:text-gray-300
                      dark:hover:bg-zinc-800
                      dark:hover:text-orange-400
                    "
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;

