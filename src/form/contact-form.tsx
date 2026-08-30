import React from "react";
import { Send } from "lucide-react";
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
    <div
      className="
        rounded-3xl
        border border-zinc-200
        bg-white/80
        p-5
        shadow-sm
        backdrop-blur-xl
        dark:border-zinc-800
        dark:bg-[#0B111D]/70
        dark:shadow-none
      "
    >
      <h3 className="mb-8 text-2xl font-semibold">
        Send a Message
      </h3>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
              value={formData.name}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border border-zinc-300
                bg-white
                px-4 py-3
                text-zinc-900
                placeholder:text-zinc-400
                outline-none
                transition
                focus:border-orange-500
                dark:border-zinc-700
                dark:bg-transparent
                dark:text-white
                dark:placeholder:text-zinc-500
              "
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              value={formData.email}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border border-zinc-300
                bg-white
                px-4 py-3
                text-zinc-900
                placeholder:text-zinc-400
                outline-none
                transition
                focus:border-orange-500
                dark:border-zinc-700
                dark:bg-transparent
                dark:text-white
                dark:placeholder:text-zinc-500
              "
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Subject
          </label>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            required
            className="
              w-full
              rounded-xl
              border border-zinc-300
              bg-white
              px-4 py-3
              text-zinc-900
              placeholder:text-zinc-400
              outline-none
              transition
              focus:border-orange-500
              dark:border-zinc-700
              dark:bg-transparent
              dark:text-white
              dark:placeholder:text-zinc-500
            "
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Message
          </label>

          <textarea
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
              border border-zinc-300
              bg-white
              px-4 py-3
              text-zinc-900
              placeholder:text-zinc-400
              outline-none
              transition
              focus:border-orange-500
              dark:border-zinc-700
              dark:bg-transparent
              dark:text-white
              dark:placeholder:text-zinc-500
            "
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="
            flex w-full
            cursor-pointer
            items-center justify-center gap-3
            rounded-xl
            bg-gradient-to-r
            from-orange-500
            to-orange-600
            py-3
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:from-orange-400
            hover:to-orange-500
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >
          <Send size={18} />

          {isSending ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;