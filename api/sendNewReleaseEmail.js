import nodemailer from "nodemailer";

import { render } from "@react-email/render";
// eslint-disable-next-line no-unused-vars
import NewReleaseEmail from "../src/assets/emails/new-release-email";

// Check vercel deployment protection on lower envs
const handler = async (req, res) => {
  const bandEmail = process.env.BAND_EMAIL;
  const bandPass = process.env.BAND_PASS;
  const baseUrl = process.env.VERCEL_BRANCH_URL
    ? `https://${process.env.VERCEL_BRANCH_URL}`
    : "http://localhost:3000";
  const emailHTML = render(<NewReleaseEmail />);

  const imageAttachments = [
    {
      filename: "spotify.png",
      path: `${baseUrl}/static/spotify.png`,
      cid: "spotify",
    },
    {
      filename: "apple-music.png",
      path: `${baseUrl}/static/apple-music.png`,
      cid: "apple-music",
    },
    {
      filename: "instagram.png",
      path: `${baseUrl}/static/instagram.png`,
      cid: "instagram",
    },
    {
      filename: "gmail.png",
      path: `${baseUrl}/static/gmail.png`,
      cid: "gmail",
    },
  ];

  // Creating Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: bandEmail,
      pass: bandPass,
    },
    pool: true,
    attachDataUrls: true,
  });

  transporter.on("debug", (info) => {
    console.log("Nodemailer debug:", info);
  });

  // Email options for band notifier
  const bandMailOptions = {
    from: bandEmail,
    to: bandEmail, // Replace with your band's email
    subject: "Your Song is Out 🎵",
    text: `All is right in the world. Your release, 'Stuck at Home', is out!`,
  };

  // Email options for release
  const newReleaseOptions = {
    from: "nathanielrbowman@gmail.com",
    to: [
      "mail1@mailinator.com",
      "mail2@mailinator.com",
      "mail3@mailinator.com",
    ], // TODO: send to array of emails
    subject: "New Ryland, Out Now!! Stream Anywhere ⚾️",
    html: emailHTML,
    attachments: imageAttachments.push({
      filename: "stuck-at-home.jpg",
      path: `${baseUrl}/static/stuck-at-home.jpg`,
      cid: "stuck-at-home",
    }),
  };

  try {
    // Sending new member email
    transporter.sendMail(newReleaseOptions);
    console.log("New release sent to emails.");

    await transporter.sendMail(bandMailOptions);
    console.log("New release sent to bandmates.");
    // TODO: GET data from Google Sheets
    // await axios.get(webAppURL);
    // console.log("Data received from Google Sheets");

    res.status(200).json({ message: "New release emails sent!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Failed to send new release emails.");
  }
};

export default handler;
