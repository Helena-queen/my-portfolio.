import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed.",
    });
  }

  // Check API key before creating Resend instance
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is missing.");

    return res.status(500).json({
      message: "Email service is not configured.",
    });
  }

  // Create Resend instance only after confirming the API key exists
  const resend = new Resend(apiKey);

  const { name, email, subject, message } = req.body || {};

  // Validate fields
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string"
  ) {
    return res.status(400).json({
      message: "Please fill in all fields.",
    });
  }

  if (
    !name.trim() ||
    !email.trim() ||
    !subject.trim() ||
    !message.trim()
  ) {
    return res.status(400).json({
      message: "Please fill in all fields.",
    });
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({
      message: "Please enter a valid email address.",
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",

      to: ["oputehelen18@gmail.com"],

      replyTo: email.trim(),

      subject: `Portfolio Contact: ${subject.trim()}`,

      text: `
Hello Helen,

You have received a new message through your portfolio contact form.

========================================
CONTACT DETAILS
========================================

Name: ${name.trim()}
Email: ${email.trim()}
Subject: ${subject.trim()}

========================================
MESSAGE
========================================

${message.trim()}

========================================

This message was sent through your portfolio website.
      `.trim(),
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return res.status(500).json({
        message: error.message || "Resend failed to send the email.",
      });
    }

    console.log("EMAIL SENT SUCCESSFULLY:", data);

    return res.status(200).json({
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("CONTACT FUNCTION ERROR:", error);

    return res.status(500).json({
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong while sending the message.",
    });
  }
}