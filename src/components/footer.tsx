
import React from "react";
import {
  ArrowUp,
  // Mail,
  Heart,
} from "lucide-react";

// import {
//   FaGithub,
//   FaLinkedin,
// } from "react-icons/fa6";

import { motion } from "framer-motion";

function Footer(): React.ReactElement {
  return (
    <footer
      className="
        border-t
        border-zinc-200
        bg-white
        dark:border-zinc-800
        dark:bg-[#050b14]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          py-10
          sm:px-6
          sm:py-12
          lg:px-8
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex justify-center sm:mb-10"
        >
          <span
            className="
              inline-flex
              max-w-full
              items-center
              justify-center
              rounded-full
              border
              border-green-500/30
              bg-green-500/10
              px-4
              py-2
              text-center
              text-xs
              font-medium
              leading-5
              text-green-600
              dark:text-green-400
              sm:px-5
              sm:text-sm
            "
          >
            <span className="mr-2">🟢</span>
            Available for Freelance & Full-Time Opportunities
          </span>
        </motion.div>
{/* 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8 flex justify-center gap-3 sm:mb-10 sm:gap-5"
        >
          <motion.a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-zinc-100
              text-zinc-800
              transition-all
              duration-300
              hover:bg-gray-500
              hover:text-white
              dark:bg-zinc-900
              dark:text-white
              sm:h-12
              sm:w-12
            "
          >
            <FaGithub size={20} />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-blue-500/10
              text-blue-500
              transition-all
              duration-300
              // hover:bg-blue-500
              // hover:text-white
              sm:h-12
              sm:w-12
            "
          >
            <FaLinkedin size={20} />
          </motion.a>

          <motion.a
            href="mailto:your@email.com"
            aria-label="Send me an email"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-red-500/10
              text-red-500
              transition-all
              duration-300
              hover:bg-red-900
              hover:text-white
              sm:h-12
              sm:w-12
            "
          >
            <Mail size={20} />
          </motion.a>
        </motion.div> */}

      
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="
            mb-6
            h-px
            bg-gradient-to-r
            from-transparent
            via-orange-500/40
            to-transparent
            sm:mb-8
          "
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            flex
            flex-col
            items-center
            gap-5
            text-center
            md:flex-row
            md:justify-between
            md:text-left
          "
        >
          <p
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-2
              gap-y-1
              text-xs
              leading-6
              text-zinc-500
              dark:text-zinc-400
              sm:text-sm
              md:justify-start
            "
          >
            <span>© {new Date().getFullYear()} Helen Opute</span>

            <span className="flex items-center gap-1">
              Made with
              <Heart
                size={14}
                className="fill-red-500 text-red-500"
              />
            </span>

            <span>
              Built with React • TypeScript • Tailwind CSS
            </span>
          </p>

          {/* Back To Top */}
          <motion.a
            href="#home"
            aria-label="Back to top"
            whileHover={{
              scale: 1.1,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-orange-500
              to-orange-600
              text-white
              shadow-lg
              shadow-orange-500/20
              transition-all
              duration-300
              hover:shadow-orange-500/50
              active:scale-95
              sm:h-12
              sm:w-12
            "
          >
            <ArrowUp size={18} />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;

