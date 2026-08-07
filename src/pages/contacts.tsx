import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

function Contacts(): React.ReactElement {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-10 text-white"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" />

        <p className="mt-8 max-w-2xl mx-auto text-zinc-400 text-lg">
          I'm always open to discussing new opportunities, freelance
          projects, collaborations, or simply having a conversation
          about software development and technology.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left */}
        <div className="space-y-8">
          {/* Contact Information */}
          <div className="rounded-3xl border border-zinc-800 p-8 backdrop-blur-xl">
            <h3 className="mb-8 text-2xl font-semibold">
              Contact Information
            </h3>

            <div className="space-y-8">
              <ContactItem
                icon={<Mail size={20} className="text-[#2469e2]" />}
                title="Email"
                value="oputehelen@gmail.com"
                bgColor="bg-[#1e408e]"
              />

              <ContactItem
                icon={<Phone size={20} className="text-[#3fa33f]" />}
                title="Phone"
                value="+234 706 395 3713"
                bgColor="bg-[#1a542c]"
              />

              <ContactItem
                icon={<MapPin size={20} className="text-[#f59e0b] " />}
                title="Location"
                value="Lagos, Nigeria"
                bgColor="bg-[#f59e0b]/20"
              />
            </div>
          </div>

          {/* Socials */}
          <div className="rounded-3xl border border-zinc-800 bg-[#0B111D]/70 p-8 backdrop-blur-xl">
            <h3 className="mb-8 text-2xl font-semibold">
              Connect With Me
            </h3>

           <div className="flex gap-5">
  <SocialIcon icon={<FaGithub size={15} />} bgcolor="bg-gray-800" hoverColor="hover:bg-gray-600" />
  <SocialIcon icon={<FaLinkedin size={15} />} bgcolor="bg-[#0077b5]" hoverColor="hover:bg-[#0077b5]" />
  <SocialIcon icon={<FaFacebook size={15} />} bgcolor="bg-[#1877f2]" hoverColor="hover:bg-[#1877f2]" />
  <SocialIcon icon={<FaXTwitter size={15} />} bgcolor="bg-[#1da1f2]" hoverColor="hover:bg-[#1da1f2]" />
  <SocialIcon icon={<FaInstagram size={15} />} bgcolor="bg-[#e1306c]" hoverColor="hover:bg-[#e1306c]" />
</div>
          </div>
        </div>

        {/* Message Form */}
        <div className="rounded-3xl border border-zinc-800 bg-[#0B111D]/70 p-5 backdrop-blur-xl">
          <h3 className="mb-8 text-2xl font-semibold">
            Send a Message
          </h3>

          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-zinc-700 bg-transparent px-4 py-3 outline-none transition focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-zinc-700 bg-transparent px-4 py-3 outline-none transition focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Subject
              </label>

              <input
                type="text"
                placeholder="What's this about?"
                className="w-full rounded-xl border border-zinc-700 bg-transparent px-4 py-3 outline-none transition focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full rounded-xl border border-zinc-700 bg-transparent px-4 py-3 outline-none transition focus:border-orange-500 resize-none"
              />
            </div>

            <button
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3 font-semibold transition-all duration-300 hover:scale-[1.02] hover:from-orange-400 hover:to-orange-500"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

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
}: ContactItemProps) {
  return (
    <div className="flex items-center gap-5">
      <div className={`rounded-xl ${bgColor} p-4`}>
        {icon}
      </div>

      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-zinc-400">{value}</p>
      </div>
    </div>
  );
}

interface SocialIconProps {
  icon: React.ReactNode;
  bgcolor: string;
  hoverColor: string;
}

function SocialIcon({
  icon,
  bgcolor,
  hoverColor,
}: SocialIconProps) {
  return (
    <button
      className={`rounded-xl ${bgcolor} p-4  transition-all duration-300 hover:scale-110 ${hoverColor} hover:text-white`}
    >
      {icon}
    </button>
  );
}

export default Contacts;