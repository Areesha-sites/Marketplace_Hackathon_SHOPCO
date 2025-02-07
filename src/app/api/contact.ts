import { client } from "@/sanity/lib/client";
import nodemailer from "nodemailer";
import { createClient } from "@sanity/client";
export const clients = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-05-03",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, 
  useCdn: false,
});
export default async function handler(req: any, res: any) {
  if (req.method == "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
console.log(res)
  try {
    const { name, fullName, email, phoneNumber, message } = req.body;
    const doc = {
      _type: "contactMessage",
      firstName: name,
      lastName: fullName,
      email,
      phoneNumber,
      message,
    };
    await client.create(doc);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `Name: ${name} ${fullName}\nEmail: ${email}\nPhone: ${phoneNumber}\nMessage: ${message}`,
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error sending message", error });
  }
}