import React from "react";

interface SocialIconProps {
  icon: React.ReactNode;
  bgcolor: string;
  hoverColor: string;
  classname?: string;
}

function SocialIcon({
  icon,
  bgcolor,
  hoverColor,
  classname,
}: SocialIconProps): React.ReactElement {
  return (
    <span
      className={`
        inline-flex
        rounded-xl
        ${bgcolor}
        p-4
        text-white
        transition-all
        duration-300
        hover:scale-110
        ${hoverColor}
        ${classname ?? ""}
      `}
    >
      {icon}
    </span>
  );
}

export default SocialIcon;