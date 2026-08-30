import React from "react";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import socialLinks from "../../data/social-links";
import SocialIcon from "./social-icon";



function SocialLinks(): React.ReactElement {
  const icons = {
    GitHub: {
      icon: <FaGithub size={15} />,
      bgcolor: "bg-gray-800",
      hoverColor: "hover:bg-gray-600",
    },
    LinkedIn: {
      icon: <FaLinkedin size={15} />,
      bgcolor: "bg-[#0077b5]",
      hoverColor: "hover:bg-[#0077b5]",
    },
    Facebook: {
      icon: <FaFacebook size={15} />,
      bgcolor: "bg-[#1877f2]",
      hoverColor: "hover:bg-[#1877f2]",
    },
    X: {
      icon: <FaXTwitter size={15} />,
      bgcolor: "bg-[#1da1f2]",
      hoverColor: "hover:bg-[#1da1f2]",
    },
    Instagram: {
      icon: <FaInstagram size={15} />,
      bgcolor: "bg-[#e1306c]",
      hoverColor: "hover:bg-[#e1306c]",
    },
  };

  return (
    <div
      className="
        rounded-3xl
        border border-zinc-200
        bg-white/80
        p-8
        shadow-sm
        backdrop-blur-xl
        dark:border-zinc-800
        dark:bg-[#0B111D]/70
        dark:shadow-none
      "
    >
      <h3 className="mb-8 text-2xl font-semibold">
        Connect With Me
      </h3>

      <div className="flex flex-wrap gap-5">
        {socialLinks.map((social) => {
          const socialIcon = icons[
            social.name as keyof typeof icons
          ];

          if (!socialIcon) return null;

          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${social.name} profile`}
            >
              <SocialIcon
                icon={socialIcon.icon}
                bgcolor={socialIcon.bgcolor}
                hoverColor={socialIcon.hoverColor}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default SocialLinks;