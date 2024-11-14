import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.FROM_EMAIL_GMAIL,
    pass: process.env.FROM_EMAIL_PASSWORD,
  },
});

export async function registerUserAndsendMail() {
  // await transporter.sendMail({
  //   from: process.env.FROM_EMAIL_GMAIL,
  //   to: email,
  //   subject: "Verify your email",
  //   html: `
  //     <h1>Email Verification</h1>
  //     <p>Hi ${existingUser.name},</p>
  //     <p>Your verification code is: <strong>${otp}</strong></p>
  //     <p>This code will expire in 10 minutes.</p>
  //   `,
  // });
  // const registration = await prisma.registration.create({
  //   data: {
  //     email: "",
  //   },
  // });
}
