import React from "react";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import ContactItem from "./contact-item";
import SocialLinks from "./social-links";



function ContactInfo(): React.ReactElement {
  return (
    <div className="space-y-8">
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
          Contact Information
        </h3>

        <div className="space-y-8">
          <ContactItem
            icon={<Mail size={20} className="text-[#2469e2]" />}
            title="Email"
            value="oputehelen@gmail.com"
            bgColor="bg-blue-100 dark:bg-[#1e408e]"
          />

          <ContactItem
            icon={<Phone size={20} className="text-[#3fa33f]" />}
            title="Phone"
            value="+234 706 395 3713"
            bgColor="bg-green-100 dark:bg-[#1a542c]"
          />

          <ContactItem
            icon={<MapPin size={20} className="text-[#f59e0b]" />}
            title="Location"
            value="Lagos, Nigeria"
            bgColor="bg-orange-100 dark:bg-[#f59e0b]/20"
          />
        </div>
      </div>

      <SocialLinks/>
    </div>
  );
}

export default ContactInfo;