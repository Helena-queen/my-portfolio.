import { useState } from "react";
import type { ContactFormData } from "../types/contact";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function useContactForm() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setStatus("");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus("Please fill in all fields.");
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Something went wrong while sending your message."
        );
      }

      setStatus("Message sent successfully!");

      setFormData(initialFormData);
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return {
    formData,
    isSending,
    status,
    handleChange,
    handleSubmit,
  };
}

export default useContactForm;