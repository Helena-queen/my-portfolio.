import React from "react";
import {
  Briefcase,
  CalendarDays,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "Freelance & Personal Projects",
    duration: "2024 - Present",
    location: "Nigeria",
    description:
      "Designing and developing modern web applications using frontend and backend technologies while delivering scalable and responsive solutions.",

    highlights: [
      "Built responsive web applications with React, TypeScript and Tailwind CSS.",
      "Developed REST APIs using .NET and Node.js.",
      "Integrated databases including MongoDB and SQL.",
      "Collaborated with Git & GitHub using modern workflows."
    ],

    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      ".NET",
      "Node.js",
      "MongoDB",
      "Git"
    ]
  },

  {
    title: "Technical QA Engineer",
    company: "ESMA Project",
    duration: "2025",
    location: "Remote",

    description:
      "Responsible for ensuring software quality through comprehensive testing, documenting bugs, validating API endpoints and collaborating closely with developers.",

    highlights: [
      "Performed API testing using Swagger and Bruno.",
      "Prepared QA documentation and test cases.",
      "Verified frontend-backend integrations.",
      "Reported and tracked defects until resolution."
    ],

    tech: [
      "Swagger",
      "Bruno",
      "REST APIs",
      "QA",
      "Testing",
      "Documentation"
    ]
  },

  {
    title: "Project Manager",
    company: "Software Development Team",
    duration: "2025",
    location: "Remote",

    description:
      "Led software projects by coordinating developers, tracking milestones and ensuring timely delivery of project objectives.",

    highlights: [
      "Managed project planning and timelines.",
      "Assigned development tasks.",
      "Communicated with stakeholders.",
      "Monitored project progress and quality."
    ],

    tech: [
      "Agile",
      "Leadership",
      "Planning",
      "Communication"
    ]
  }
];

function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-12 text-white"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="w-28 h-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-4" />
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-orange-500/40 ml-6">

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative mb-16 ml-10"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[52px] top-2 h-6 w-6 rounded-full bg-orange-500 border-4 border-[#050b14]" />

            <div className="rounded-3xl border border-zinc-800 bg-[#0B111D]/70 p-8 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/50 hover:-translate-y-1">

              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between gap-6">

                <div>
                  <div className="flex items-center gap-3">
                    <Briefcase
                      className="text-orange-400"
                      size={22}
                    />

                    <h3 className="text-2xl font-bold">
                      {exp.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-lg font-semibold text-orange-400">
                    {exp.company}
                  </p>
                </div>

                <div className="space-y-2 text-zinc-400">

                  <div className="flex items-center gap-2 md:justify-end">
                    <CalendarDays
                      size={17}
                      className="text-orange-400"
                    />

                    {exp.duration}
                  </div>

                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin
                      size={17}
                      className="text-orange-400"
                    />

                    {exp.location}
                  </div>

                </div>
              </div>

              {/* Description */}
              <p className="mt-8 leading-8 text-zinc-300">
                {exp.description}
              </p>

              {/* Highlights */}
              <h4 className="mt-8 text-lg font-semibold">
                Key Highlights
              </h4>

              <ul className="mt-5 space-y-3">
                {exp.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 text-orange-400 flex-shrink-0"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="mt-8 flex flex-wrap gap-3">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[#262626] px-4 py-2 text-sm text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Experience;