import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import ContactItem from "./contact-item";
import SocialLinks from "./social-links";

function ContactInfo(): React.ReactElement {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
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
          Contact Information
        </h3>

        <div className="space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.15,
              ease: "easeOut",
            }}
          >
            <ContactItem
              icon={<Mail size={20} className="text-[#2469e2]" />}
              title="Email"
              value="oputehelen@gmail.com"
              bgColor="bg-blue-100 dark:bg-[#1e408e]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.25,
              ease: "easeOut",
            }}
          >
            <ContactItem
              icon={<Phone size={20} className="text-[#3fa33f]" />}
              title="Phone"
              value="+234 706 395 3713"
              bgColor="bg-green-100 dark:bg-[#1a542c]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.35,
              ease: "easeOut",
            }}
          >
            <ContactItem
              icon={<MapPin size={20} className="text-[#f59e0b]" />}
              title="Location"
              value="Lagos, Nigeria"
              bgColor="bg-orange-100 dark:bg-[#f59e0b]/20"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.15,
          ease: "easeOut",
        }}
      >
        <SocialLinks />
      </motion.div>
    </div>
  );
}

export default ContactInfo;