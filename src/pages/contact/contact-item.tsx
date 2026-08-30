import React from "react";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  bgColor: string;
}

function ContactItem({
  icon,
  title,
  value,
  bgColor,
}: ContactItemProps): React.ReactElement {
  return (
    <div className="flex min-w-0 items-center gap-4 sm:gap-5">
      <div
        className={`
          flex
          shrink-0
          items-center
          justify-center
          rounded-xl
          p-3
          sm:p-4
          ${bgColor}
        `}
      >
        {icon}
      </div>

      <div className="min-w-0">
        <h4 className="font-semibold">
          {title}
        </h4>

        <p
          className="
            break-words
            text-sm
            text-zinc-500
            dark:text-zinc-400
            sm:text-base
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
}

export default ContactItem;