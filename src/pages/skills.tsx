import React from "react";
import {
  Code2,
  Database,
  Wrench,
  ShieldCheck,
  BriefcaseBusiness,
} from "lucide-react";

const frontend = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
];

const backend = [
  ".NET",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
];

const tools = [
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
  "Bruno",
  "Swagger",
  "Figma",
  "Trello",
  "Jira",
];

const qa = [
  "API Testing",
  "Smoke Testing",
  "Test Case Design",
  "Test Documentation",
  "Bug Reporting",
  "QA Documentation",
  "UI Testing",
  "User Acceptance Testing",
];

const management = [
  "Project Planning",
  "Team Coordination",
  "Risk Management",
  "Requirement Analysis",
  "Progress Tracking",
  "Software Documentation",
  "Quality Assurance",
];

const strengths = [
  { name: "Problem Solving", color: "bg-orange-700" },
  { name: "Leadership", color: "bg-blue-700" },
  { name: "Technical QA", color: "bg-green-800" },
  { name: "Project Management", color: "bg-purple-700" },
  { name: "Team Collaboration", color: "bg-pink-700" },
  { name: "Communication", color: "bg-cyan-800" },
  { name: "Critical Thinking", color: "bg-red-800" },
  { name: "Analytical Thinking", color: "bg-emerald-800" },
  { name: "Documentation", color: "bg-amber-800" },
  { name: "Time Management", color: "bg-indigo-900" },
  { name: "Fast Learner", color: "bg-teal-700" },
  { name: "Attention to Detail", color: "bg-rose-700" },
];

function Skills(): React.ReactElement {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-22 text-zinc-900 dark:text-white"
    >
      <div className="mb-16 text-center">
        <h2 className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-4xl font-bold text-transparent">
          Skills & Expertise
        </h2>

        <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" />
      </div>

      {/* Skill Cards */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <SkillCard
          icon={<Code2 size={28} className="text-orange-500 dark:text-orange-400" />}
          title="Frontend Development"
          skills={frontend}
        />

        <SkillCard
          icon={<Database size={28} className="text-blue-500 dark:text-blue-400" />}
          title="Backend Development"
          skills={backend}
        />

        <SkillCard
          icon={<Wrench size={28} className="text-green-500 dark:text-green-400" />}
          title="Tools & Workflow"
          skills={tools}
        />

        <SkillCard
          icon={<ShieldCheck size={28} className="text-purple-500 dark:text-purple-400" />}
          title="Testing & Quality Assurance"
          skills={qa}
        />

        <SkillCard
          icon={<BriefcaseBusiness size={28} className="text-red-500 dark:text-red-400" />}
          title="Project Management"
          skills={management}
        />
      </div>

      {/* Professional Strengths */}
      <div
        className="
          mt-16
          rounded-3xl
          border border-orange-500/20
          bg-gradient-to-r from-orange-500/10 to-orange-600/10
          p-10
        "
      >
        <h3 className="mb-8 text-center text-2xl font-semibold">
          Professional Strengths
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {strengths.map((strength) => (
            <span
              key={strength.name}
              className={`${strength.color} rounded-full px-3 py-1.5 font-medium text-white transition-transform duration-300 hover:scale-105`}
            >
              {strength.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

function SkillCard({
  icon,
  title,
  skills,
}: SkillCardProps): React.ReactElement {
  return (
    <div
      className="
        rounded-3xl
        border border-zinc-200
        bg-white/80
        p-8
        shadow-sm
        backdrop-blur-xl
        transition-all duration-300
        hover:-translate-y-2
        hover:border-orange-500/40
        hover:shadow-xl
        hover:shadow-orange-500/10
        dark:border-zinc-800
        dark:bg-[#0b111d]/70
        dark:shadow-none
      "
    >
      <div className="mb-8 flex items-center gap-3">
        {icon}

        <h3 className="text-xl font-semibold">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
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
  );
}

export default Skills;