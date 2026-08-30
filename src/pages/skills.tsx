import React from "react";
import {
  Code2,
  Database,
  Wrench,
  ShieldCheck,
  BriefcaseBusiness,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

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

/* ================================
   Animation Variants
================================ */

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const cardsContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const badgesContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.25,
    },
  },
};

const badgeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const strengthsContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.15,
    },
  },
};

const strengthVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 10,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ================================
   Skills Component
================================ */

function Skills(): React.ReactElement {
  const shouldReduceMotion = useReducedMotion();

  /*
   * If the user has enabled reduced motion
   * in their operating system/browser, we
   * remove movement-heavy animations.
   */
  const reducedSectionVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : sectionVariants;

  const reducedHeadingVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : headingVariants;

  const reducedCardsContainerVariants: Variants = shouldReduceMotion
    ? {
        hidden: {},
        visible: {},
      }
    : cardsContainerVariants;

  const reducedCardVariants: Variants = shouldReduceMotion
    ? {
        hidden: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      }
    : cardVariants;

  const reducedBadgesContainerVariants: Variants = shouldReduceMotion
    ? {
        hidden: {},
        visible: {},
      }
    : badgesContainerVariants;

  const reducedBadgeVariants: Variants = shouldReduceMotion
    ? {
        hidden: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
        },
      }
    : badgeVariants;

  const reducedStrengthsContainerVariants: Variants = shouldReduceMotion
    ? {
        hidden: {},
        visible: {},
      }
    : strengthsContainerVariants;

  const reducedStrengthVariants: Variants = shouldReduceMotion
    ? {
        hidden: {
          opacity: 1,
          scale: 1,
          y: 0,
        },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
        },
      }
    : strengthVariants;

  return (
    <motion.section
      id="skills"
      variants={reducedSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
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
      {/* ================================
          Section Heading
      ================================= */}

      <motion.div
        variants={reducedHeadingVariants}
        className="
          mb-10
          text-center
          sm:mb-16
        "
      >
        <motion.h2
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
          Skills & Expertise
        </motion.h2>

        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: "7rem",
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="
            mx-auto
            mt-4
            h-1
            rounded-full
            bg-gradient-to-r
            from-orange-400
            to-orange-600
            sm:w-28
          "
        />
      </motion.div>

      {/* ================================
          Skill Cards
      ================================= */}

      <motion.div
        variants={reducedCardsContainerVariants}
        className="
          grid
          gap-5
          sm:gap-6
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        <SkillCard
          icon={
            <Code2
              size={26}
              className="text-orange-500 dark:text-orange-400"
            />
          }
          title="Frontend Development"
          skills={frontend}
          variants={reducedCardVariants}
          badgeContainerVariants={reducedBadgesContainerVariants}
          badgeVariants={reducedBadgeVariants}
        />

        <SkillCard
          icon={
            <Database
              size={26}
              className="text-blue-500 dark:text-blue-400"
            />
          }
          title="Backend Development"
          skills={backend}
          variants={reducedCardVariants}
          badgeContainerVariants={reducedBadgesContainerVariants}
          badgeVariants={reducedBadgeVariants}
        />

        <SkillCard
          icon={
            <Wrench
              size={26}
              className="text-green-500 dark:text-green-400"
            />
          }
          title="Tools & Workflow"
          skills={tools}
          variants={reducedCardVariants}
          badgeContainerVariants={reducedBadgesContainerVariants}
          badgeVariants={reducedBadgeVariants}
        />

        <SkillCard
          icon={
            <ShieldCheck
              size={26}
              className="text-purple-500 dark:text-purple-400"
            />
          }
          title="Testing & Quality Assurance"
          skills={qa}
          variants={reducedCardVariants}
          badgeContainerVariants={reducedBadgesContainerVariants}
          badgeVariants={reducedBadgeVariants}
        />

        <SkillCard
          icon={
            <BriefcaseBusiness
              size={26}
              className="text-red-500 dark:text-red-400"
            />
          }
          title="Project Management"
          skills={management}
          variants={reducedCardVariants}
          badgeContainerVariants={reducedBadgesContainerVariants}
          badgeVariants={reducedBadgeVariants}
        />
      </motion.div>

      {/* ================================
          Professional Strengths
      ================================= */}

      <motion.div
        variants={reducedSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          mt-10
          rounded-3xl
          border
          border-orange-500/20
          bg-gradient-to-r
          from-orange-500/10
          to-orange-600/10
          p-5
          sm:mt-16
          sm:p-8
          lg:p-10
        "
      >
        <motion.h3
          variants={reducedHeadingVariants}
          className="
            mb-6
            text-center
            text-xl
            font-semibold
            sm:mb-8
            sm:text-2xl
          "
        >
          Professional Strengths
        </motion.h3>

        <motion.div
          variants={reducedStrengthsContainerVariants}
          className="
            flex
            flex-wrap
            justify-center
            gap-2.5
            sm:gap-3
            md:gap-4
          "
        >
          {strengths.map((strength) => (
            <motion.span
              key={strength.name}
              variants={reducedStrengthVariants}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -5,
                      scale: 1.05,
                    }
              }
              whileTap={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 0.96,
                    }
              }
              transition={{
                duration: 0.2,
              }}
              className={`
                ${strength.color}
                cursor-default
                rounded-full
                px-3
                py-1.5
                text-xs
                font-medium
                text-white
                shadow-sm
                transition-shadow
                duration-300
                hover:shadow-lg
                sm:px-4
                sm:py-2
                sm:text-sm
              `}
            >
              {strength.name}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

/* ================================
   Skill Card
================================ */

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  variants: Variants;
  badgeContainerVariants: Variants;
  badgeVariants: Variants;
}

function SkillCard({
  icon,
  title,
  skills,
  variants,
  badgeContainerVariants,
  badgeVariants,
}: SkillCardProps): React.ReactElement {
  return (
    <motion.div
      variants={variants}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      className="
        group
        rounded-3xl
        border
        border-zinc-200
        bg-white/80
        p-5
        shadow-sm
        backdrop-blur-xl
        transition-colors
        duration-300
        hover:border-orange-500/40
        hover:shadow-xl
        hover:shadow-orange-500/10
        sm:p-7
        lg:p-8
        dark:border-zinc-800
        dark:bg-[#0b111d]/70
        dark:shadow-none
        dark:hover:border-orange-500/40
      "
    >
      {/* Card Heading */}

      <div
        className="
          mb-6
          flex
          items-start
          gap-3
          sm:mb-8
          sm:items-center
        "
      >
        <motion.div
          whileHover={{
            scale: 1.15,
            rotate: 5,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="shrink-0"
        >
          {icon}
        </motion.div>

        <h3
          className="
            text-lg
            font-semibold
            leading-6
            sm:text-xl
          "
        >
          {title}
        </h3>
      </div>

      {/* Skills */}

      <motion.div
        variants={badgeContainerVariants}
        className="
          flex
          flex-wrap
          gap-2.5
          sm:gap-3
        "
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            variants={badgeVariants}
            whileHover={{
              y: -3,
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              cursor-default
              rounded-full
              bg-zinc-100
              px-3
              py-1.5
              text-xs
              text-zinc-700
              transition-colors
              duration-300
              hover:bg-orange-100
              hover:text-orange-700
              sm:px-4
              sm:py-2
              sm:text-sm
              dark:bg-[#262626]
              dark:text-white
              dark:hover:bg-orange-500/15
              dark:hover:text-orange-300
            "
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Skills;