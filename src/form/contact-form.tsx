import React from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import useContactForm from "../hooks/use-contact-form";

function ContactForm(): React.ReactElement {
  const {
    formData,
    isSending,
    status,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
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
        Send a Message
      </h3>

      <form
        className="space-y-5 sm:space-y-6"
        onSubmit={handleSubmit}
      >
        {/* Name + Email */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium sm:text-base"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your full name"
              required
              value={formData.name}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-zinc-300
                bg-white
                px-4
                py-3
                text-sm
                text-zinc-900
                placeholder:text-zinc-400
                outline-none
                transition
                focus:border-orange-500
                focus:ring-2
                focus:ring-orange-500/20
                dark:border-zinc-700
                dark:bg-transparent
                dark:text-white
                dark:placeholder:text-zinc-500
                sm:text-base
              "
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium sm:text-base"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-zinc-300
                bg-white
                px-4
                py-3
                text-sm
                text-zinc-900
                placeholder:text-zinc-400
                outline-none
                transition
                focus:border-orange-500
                focus:ring-2
                focus:ring-orange-500/20
                dark:border-zinc-700
                dark:bg-transparent
                dark:text-white
                dark:placeholder:text-zinc-500
                sm:text-base
              "
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-medium sm:text-base"
          >
            Subject
          </label>

          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            required
            className="
              w-full
              rounded-xl
              border
              border-zinc-300
              bg-white
              px-4
              py-3
              text-sm
              text-zinc-900
              placeholder:text-zinc-400
              outline-none
              transition
              focus:border-orange-500
              focus:ring-2
              focus:ring-orange-500/20
              dark:border-zinc-700
              dark:bg-transparent
              dark:text-white
              dark:placeholder:text-zinc-500
              sm:text-base
            "
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium sm:text-base"
          >
            Message
          </label>

          <textarea
            id="message"
            rows={6}
            name="message"
            placeholder="Tell me about your project..."
            required
            value={formData.message}
            onChange={handleChange}
            className="
              w-full
              resize-none
              rounded-xl
              border
              border-zinc-300
              bg-white
              px-4
              py-3
              text-sm
              leading-6
              text-zinc-900
              placeholder:text-zinc-400
              outline-none
              transition
              focus:border-orange-500
              focus:ring-2
              focus:ring-orange-500/20
              dark:border-zinc-700
              dark:bg-transparent
              dark:text-white
              dark:placeholder:text-zinc-500
              sm:text-base
            "
          />
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={isSending}
          whileTap={{ scale: 0.99 }}
          className="
            flex
            min-h-12
            w-full
            cursor-pointer
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-gradient-to-r
            from-orange-500
            to-orange-600
            px-4
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-[1.01]
            hover:from-orange-400
            hover:to-orange-500
            active:scale-[0.99]
            disabled:cursor-not-allowed
            disabled:opacity-70
            sm:text-base
          "
        >
          <Send size={18} />

          {isSending ? "Sending..." : "Send Message"}
        </motion.button>

        {/* Status */}
        {status && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              text-center
              text-sm
              leading-6
              text-zinc-600
              dark:text-zinc-400
            "
          >
            {status}
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}

export default ContactForm;