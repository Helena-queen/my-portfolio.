import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import socialLinks from "../../data/social-links";
import SocialIcon from "./social-icon";

function SocialLinks(): React.ReactElement {
  const icons = {
    GitHub: {
      icon: <FaGithub size={16} />,
      bgcolor: "bg-gray-800",
      hoverColor: "hover:bg-gray-600",
    },
    LinkedIn: {
      icon: <FaLinkedin size={16} />,
      bgcolor: "bg-[#0077b5]",
      hoverColor: "hover:bg-[#0077b5]",
    },
    Facebook: {
      icon: <FaFacebook size={16} />,
      bgcolor: "bg-[#1877f2]",
      hoverColor: "hover:bg-[#1877f2]",
    },
    X: {
      icon: <FaXTwitter size={16} />,
      bgcolor: "bg-[#1da1f2]",
      hoverColor: "hover:bg-[#1da1f2]",
    },
    Instagram: {
      icon: <FaInstagram size={16} />,
      bgcolor: "bg-[#e1306c]",
      hoverColor: "hover:bg-[#e1306c]",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="
        rounded-2xl
        border
        border-zinc-200
        bg-white/80
        p-5
        shadow-sm
        backdrop-blur-xl
        dark:border-zinc-800
        dark:bg-[#0B111D]/70
        dark:shadow-none
        sm:rounded-3xl
        sm:p-8
      "
    >
      <h3
        className="
          mb-6
          text-xl
          font-semibold
          sm:mb-8
          sm:text-2xl
        "
      >
        Connect With Me
      </h3>

      <div className="flex flex-wrap gap-3 sm:gap-5">
        {socialLinks.map((social, index) => {
          const socialIcon =
            icons[social.name as keyof typeof icons];

          if (!socialIcon) return null;

          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${social.name} profile`}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.1 + index * 0.08,
                ease: "easeOut",
              }}
            >
              <SocialIcon
                icon={socialIcon.icon}
                bgcolor={socialIcon.bgcolor}
                hoverColor={socialIcon.hoverColor}
              />
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}

export default SocialLinks;