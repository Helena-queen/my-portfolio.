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
      className="max-w-7xl mx-auto px-6 py-28 text-white"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 bg-clip-text text-transparent">
          Certifications & Training
        </h2>

        <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" />
      </div>

      {/* Cards */}
      <div className="space-y-8">
        {certifications.map((certificate) => (
          <div
            key={certificate.title}
            className="rounded-3xl border border-zinc-800 bg-[#0b111d]/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/10"
          >
            {/* Header */}
            <div className="flex flex-col justify-between gap-6 md:flex-row">
              <div>
                <div className="flex items-center gap-3">
                  <Award
                    size={24}
                    className="text-[#eeb54e]"
                  />

                  <h3 className="text-2xl font-semibold">
                    {certificate.title}
                  </h3>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-6 text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Building2
                      size={18}
                      className="text-[#a1a1a1]"
                    />
                    {certificate.organization}
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarDays
                      size={18}
                      className="text-[#a1a1a1]"
                    />
                    {certificate.year}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="mt-8 leading-8 text-zinc-300">
              {certificate.description}
            </p>

            {/* Skills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {certificate.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[#262626] px-4 py-2 text-sm text-white transition-all duration-300  hover:text-white"
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