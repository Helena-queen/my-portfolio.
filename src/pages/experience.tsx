import React from "react";
import {
  Briefcase,
  CalendarDays,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const experiences = [
  {
  title: "Frontend Instructor",
  company: "Bafuto Institute of Technology",
  duration: "2024 - 2025", // adjust to your actual dates
  location: "Nigeria",
  description:
    "Teaching and mentoring aspiring developers in frontend development through practical, project-based learning.",
  
  highlights: [
    "Taught frontend development concepts including HTML, CSS, JavaScript, and React.",
    "Guided learners through hands-on projects to strengthen their understanding of modern frontend development.",
    "Created and delivered practical lessons focused on responsive web design, user interfaces, and development best practices.",
    "Mentored students through coding challenges, debugging, and project development.",
  ],
  
  tech: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ],
  },
  {
    title: "Frontend Developer",
    company: "Elsoft Tech Hub",
    duration: "2024 - Present",
    location: "Nigeria",
    description:
      "Designing and developing modern web applications using frontend technologies while delivering scalable and responsive solutions.",

    highlights: [
  "Developing responsive and scalable web interfaces for the ESMA School Management Application using React, TypeScript, and Tailwind CSS.",
  "Leading a frontend development team, coordinating tasks, reviewing implementations, and ensuring consistent development standards.",
  "Building and integrating reusable UI components and frontend features across multiple modules of the application.",
  "Collaborating with backend developers and QA to integrate APIs, troubleshoot issues, and ensure smooth feature delivery.",
  "Participating in testing, debugging, and improving application functionality to deliver reliable user experiences.",
],

    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
    ],
  },

  {
    title: "Technical QA Engineer",
    company: "ESMA Project",
    duration: "2026",
    location: "Remote",

    description:
      "Responsible for ensuring software quality through comprehensive testing, documenting bugs, validating API endpoints and collaborating closely with developers.",

    highlights: [
      "Performed API testing using Swagger and Bruno.",
      "Prepared QA documentation and test cases.",
      "Verified frontend-backend integrations.",
      "Reported and tracked defects until resolution.",
    ],

    tech: [
      "Swagger",
      "Bruno",
      "REST APIs",
      "QA",
      "Testing",
      "Documentation",
    ],
  },

  {
    title: "Project Manager",
    company: "Software Development Team",
    duration: "2026",
    location: "Remote",

    description:
      "Led software projects by coordinating developers, tracking milestones and ensuring timely delivery of project objectives.",

    highlights: [
      "Managed project planning and timelines.",
      "Assigned development tasks.",
      "Communicated with stakeholders.",
      "Monitored project progress and quality.",
    ],

    tech: [
      "Agile",
      "Leadership",
      "Planning",
      "Communication",
    ],
  },
];

function Experience(): React.ReactElement {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-12 text-zinc-900 dark:text-white"
    >
      <div className="mb-20 text-center">
        <h2 className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-4xl font-bold text-transparent">
          Experience
        </h2>

        <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" />
      </div>

      <div className="relative ml-6 border-l-2 border-orange-500/40">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative mb-16 ml-10"
          >
            <div
              className="
                absolute -left-[52px] top-2
                h-6 w-6 rounded-full
                border-4 border-white
                bg-orange-500
                dark:border-[#050b14]
              "
            />

            <div
              className="
                rounded-3xl
                border border-zinc-200
                bg-white/80
                p-8
                shadow-sm
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1
                hover:border-orange-500/50
                hover:shadow-xl
                hover:shadow-orange-500/10
                dark:border-zinc-800
                dark:bg-[#0B111D]/70
                dark:shadow-none
              "
            >
              <div className="flex flex-col justify-between gap-6 md:flex-row">
                <div>
                  <div className="flex items-center gap-3">
                    <Briefcase
                      className="text-orange-500 dark:text-orange-400"
                      size={22}
                    />

                    <h3 className="text-2xl font-bold">
                      {exp.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-lg font-semibold text-orange-500 dark:text-orange-400">
                    {exp.company}
                  </p>
                </div>

                <div className="space-y-2 text-zinc-500 dark:text-zinc-400">
                  <div className="flex items-center gap-2 md:justify-end">
                    <CalendarDays
                      size={17}
                      className="text-[#47bf65]"
                    />

                    {exp.duration}
                  </div>

                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin
                      size={17}
                      className="text-[#47bf65]"
                    />

                    {exp.location}
                  </div>
                </div>
              </div>

              <p className="mt-8 leading-8 text-zinc-600 dark:text-zinc-300">
                {exp.description}
              </p>

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
                      className="mt-1 flex-shrink-0 text-[#47bf65]"
                    />

                    <span className="text-zinc-700 dark:text-zinc-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      bg-zinc-100
                      px-4 py-2
                      text-sm
                      text-zinc-700
                      dark:bg-[#262626]
                      dark:text-white
                    "
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