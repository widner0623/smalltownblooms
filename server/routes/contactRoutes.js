const express = require("express");
const router = express.Router();

const { Resend } = require("resend");

const Lead = require("../models/Lead");

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, inquiryType, message } = req.body;

    if (!firstName || !lastName || !email || !inquiryType || !message) {
      return res.status(400).json({
        message: "Please fill out all required fields.",
      });
    }

    const lead = await Lead.create({
      firstName,
      lastName,
      email,
      phone,
      inquiryType,
      message,
    });

    const emailReady =
      process.env.RESEND_API_KEY &&
      process.env.EMAIL_FROM &&
      process.env.EMAIL_TO;

    if (emailReady) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `New Contact Form Submission - ${inquiryType}`,
        html: `
          <h2>New Floral Inquiry</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
    }

    res.status(201).json({
      message: emailReady
        ? "Message sent successfully."
        : "Message saved successfully. Email is not configured yet.",
      lead,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;