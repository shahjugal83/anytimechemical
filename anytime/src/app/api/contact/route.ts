import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  firstName: string;
  lastName?: string;
  email: string;
  mobile: string;
  location?: string;
  message: string;
}

async function sendEmail(data: ContactFormData) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `New Contact Form Submission from ${data.firstName} ${data.lastName || ""}`,
    html: `
      <h2 style="color: #e67e22;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName || ""}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Mobile:</strong> ${data.mobile}</p>
      <p><strong>Location:</strong> ${data.location || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    if (!data.firstName || !data.email || !data.mobile || !data.message) {
      return NextResponse.json(
        { success: false, message: "Required fields are missing" },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      console.error("Email environment variables are not configured");
      return NextResponse.json(
        { success: false, message: "Email service not configured" },
        { status: 500 }
      );
    }

    await sendEmail(data);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}