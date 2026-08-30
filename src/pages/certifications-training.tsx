import React from "react";
import { Award, Building2, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Frontend Development Certificate",
    organization: "Bafuto Institute of Technology",
    year: "2024",
    description:
      "Demonstrated proficiency in developing web applications using modern frontend technologies.",
    skills: ["JavaScript", "React", "Next.js", "TypeScript"],
  },

  {
    title: "Backend Development Certificate",
    organization: "Bafuto Institute of Technology",
    year: "2024",
    description:
      "Successfully completed comprehensive backend development training covering server-side development, RESTful APIs, authentication, and database design.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      ".NET",
      "REST APIs",
      "Backend Development",
    ],
  },

  {
    title: "Software Quality Assurance Training",
    organization: "Elsoft Tech Hub",
    year: "2025 - Present",
    description:
      "Hands-on experience in API testing, software validation, bug reporting, regression testing, and QA documentation.",
    skills: [
      "Swagger",
      "Bruno",
      "API Testing",
      "Regression Testing",
      "Bug Reporting",
    ],
  },
];

function CertificationsTraining(): React.ReactElement {
  return (
    <section
      id="certifications"
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
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
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
          Certifications & Training
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

      {/* Certifications */}
      <div className="space-y-6 sm:space-y-8">
        {certifications.map((certificate, index) => (
          <motion.div
            key={certificate.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="
              rounded-3xl
              border
              border-zinc-200
              bg-white/80
              p-5
              shadow-sm
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-orange-500/40
              hover:shadow-xl
              hover:shadow-orange-500/10
              sm:p-7
              sm:hover:-translate-y-1
              lg:p-8
              dark:border-zinc-800
              dark:bg-[#0b111d]/70
              dark:shadow-none
            "
          >
            {/* Certificate Header */}
            <div className="min-w-0">
              <div className="flex items-start gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15 + 0.15,
                    ease: "easeOut",
                  }}
                  className="mt-1 shrink-0"
                >
                  <Award
                    size={22}
                    className="
                      text-[#d99d32]
                      sm:h-6
                      sm:w-6
                      dark:text-[#eeb54e]
                    "
                  />
                </motion.div>

                <h3
                  className="
                    text-xl
                    font-semibold
                    leading-tight
                    sm:text-2xl
                  "
                >
                  {certificate.title}
                </h3>
              </div>

              {/* Organization & Year */}
              <div
                className="
                  mt-4
                  flex
                  flex-col
                  gap-3
                  pl-8
                  text-sm
                  text-zinc-500
                  sm:flex-row
                  sm:flex-wrap
                  sm:items-center
                  sm:gap-6
                  sm:text-base
                  dark:text-zinc-400
                "
              >
                <div className="flex items-start gap-2">
                  <Building2
                    size={18}
                    className="
                      mt-0.5
                      shrink-0
                      text-zinc-500
                      dark:text-[#a1a1a1]
                    "
                  />

                  <span>{certificate.organization}</span>
                </div>

                <div className="flex items-center gap-2">
                  <CalendarDays
                    size={18}
                    className="
                      shrink-0
                      text-zinc-500
                      dark:text-[#a1a1a1]
                    "
                  />

                  <span>{certificate.year}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15 + 0.25,
                ease: "easeOut",
              }}
              className="
                mt-6
                text-sm
                leading-7
                text-zinc-600
                sm:mt-8
                sm:text-base
                sm:leading-8
                dark:text-zinc-300
              "
            >
              {certificate.description}
            </motion.p>

            {/* Skills */}
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
              {certificate.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay:
                      index * 0.15 +
                      0.35 +
                      skillIndex * 0.05,
                    ease: "easeOut",
                  }}
                  className="
                    rounded-full
                    bg-zinc-100
                    px-3
                    py-1.5
                    text-xs
                    text-zinc-700
                    transition-all
                    duration-300
                    hover:text-zinc-900
                    sm:px-4
                    sm:py-2
                    sm:text-sm
                    dark:bg-[#262626]
                    dark:text-white
                    dark:hover:text-white
                  "
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default CertificationsTraining;