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
    <div className="flex items-center gap-5">
      <div className={`rounded-xl ${bgColor} p-4`}>
        {icon}
      </div>

      <div>
        <h4 className="font-semibold">{title}</h4>

        <p className="text-zinc-500 dark:text-zinc-400">
          {value}
        </p>
      </div>
    </div>
  );
}

export default ContactItem;