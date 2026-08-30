import React from "react";
import { motion } from "framer-motion";
import ContactInfo from "./contact-info";
import ContactForm from "../../form/contact-form";

function Contacts(): React.ReactElement {
  return (
    <section
      id="contact"
      className="
        mx-auto
        w-full
        max-w-7xl
        px-4
        py-12
        sm:px-6
        sm:py-16
        lg:px-8
        lg:py-20
        text-zinc-900
        dark:text-white
      "
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
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
            lg:text-5xl
          "
        >
          Get In Touch
        </h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="
            mx-auto
            mt-4
            h-1
            w-20
            origin-center
            rounded-full
            bg-gradient-to-r
            from-orange-400
            to-orange-600
            sm:w-28
          "
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="
            mx-auto
            mt-6
            max-w-2xl
            px-2
            text-base
            leading-7
            text-zinc-500
            dark:text-zinc-400
            sm:mt-8
            sm:text-lg
            sm:leading-8
          "
        >
          I'm always open to discussing new opportunities,
          freelance projects, collaborations, or simply having
          a conversation about software development and
          technology.
        </motion.p>
      </motion.div>

      {/* Contact Content */}
      <div
        className="
          grid
          grid-cols-1
          gap-6
          sm:gap-8
          lg:grid-cols-2
          lg:items-start
          lg:gap-10
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <ContactInfo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

export default Contacts;