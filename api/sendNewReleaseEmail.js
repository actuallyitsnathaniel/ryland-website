import nodemailer from "nodemailer";
import axios from "axios";

// Check vercel deployment protection on lower envs
const handler = async (req, res) => {
  const bandEmail = process.env.BAND_EMAIL;
  const bandPass = process.env.BAND_PASS;
  const baseUrl = process.env.VERCEL_BRANCH_URL
    ? `https://${process.env.VERCEL_BRANCH_URL}`
    : "http://localhost:3000";

  // Google sheet url
  const webAppURL = process.env.WEB_APP_URL;

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
    text: `All is right in the world. Your release, ${songTitle}, is out!`,
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
    html: htmlBody,
    attachments: imageAttachments.push({
      filename: "stuck-at-home.jpg",
      path: `${baseUrl}/static/stuck-at-home.jpg`,
      cid: "stuck-at-home",
    }),
  };

  try {
    // Sending band notifier email
    await transporter.sendMail(bandMailOptions);
    console.log("Band notifier email sent");

    // Sending new member email
    await transporter.sendMail(newReleaseOptions);
    console.log("New member email sent");

    // TODO: GET data from Google Sheets
    await axios.get(webAppURL);
    console.log("Data sent to Google Sheets");

    res
      .status(200)
      .json({ message: "Emails sent and data logged to Google Sheets" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Failed to send emails or log data to Google Sheets");
  }
};

export default handler;
