import React from "react";
import {
  Award,
  Building2,
  CalendarDays,
} from "lucide-react";

const certifications = [
  {
    title: "Frontend Development Certificate",
    organization: "Bafuto Institute of Technology",
    year: "2024",
    description:
      "Demonstrated proficiency in developing web applications using modern frontend technologies.",
    skills: [
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
    ],
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
      className="mx-auto max-w-7xl px-6 py-28 text-zinc-900 dark:text-white"
    >
      <div className="mb-16 text-center">
        <h2 className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-4xl font-bold text-transparent">
          Certifications & Training
        </h2>

        <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" />
      </div>

      <div className="space-y-8">
        {certifications.map((certificate) => (
          <div
            key={certificate.title}
            className="
              rounded-3xl
              border border-zinc-200
              bg-white/80
              p-8
              shadow-sm
              backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-1
              hover:border-orange-500/40
              hover:shadow-xl
              hover:shadow-orange-500/10
              dark:border-zinc-800
              dark:bg-[#0b111d]/70
              dark:shadow-none
            "
          >
            <div className="flex flex-col justify-between gap-6 md:flex-row">
              <div>
                <div className="flex items-center gap-3">
                  <Award
                    size={24}
                    className="text-[#d99d32] dark:text-[#eeb54e]"
                  />

                  <h3 className="text-2xl font-semibold">
                    {certificate.title}
                  </h3>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-6 text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Building2
                      size={18}
                      className="text-zinc-500 dark:text-[#a1a1a1]"
                    />

                    {certificate.organization}
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarDays
                      size={18}
                      className="text-zinc-500 dark:text-[#a1a1a1]"
                    />

                    {certificate.year}
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-8 leading-8 text-zinc-600 dark:text-zinc-300">
              {certificate.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {certificate.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    bg-zinc-100
                    px-4 py-2
                    text-sm
                    text-zinc-700
                    transition-all duration-300
                    hover:text-zinc-900
                    dark:bg-[#262626]
                    dark:text-white
                    dark:hover:text-white
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificationsTraining;