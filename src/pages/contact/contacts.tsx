import React from "react";
import ContactInfo from "./contact-info";
import ContactForm from "../../form/contact-form";



function Contacts(): React.ReactElement {
  return (
    <section
      id="contact"
      className="
        mx-auto
        max-w-7xl
        px-6
        py-10
        text-zinc-900
        dark:text-white
      "
    >
      <div className="mb-16 text-center">
        <h2
          className="
            bg-gradient-to-r
            from-orange-400
            via-orange-500
            to-orange-600
            bg-clip-text
            text-4xl
            font-bold
            text-transparent
          "
        >
          Get In Touch
        </h2>

        <div
          className="
            mx-auto
            mt-4
            h-1
            w-28
            rounded-full
            bg-gradient-to-r
            from-orange-400
            to-orange-600
          "
        />

        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            text-zinc-500
            dark:text-zinc-400
          "
        >
          I'm always open to discussing new opportunities,
          freelance projects, collaborations, or simply having
          a conversation about software development and
          technology.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}

export default Contacts;