import nodemailer from "nodemailer";
import axios from "axios";

// Check vercel deployment protection on lower envs
const handler = async (req, res) => {
  const { firstName, lastName, emailAddress, htmlBody } = req.query; // Extracting query parameters

  const bandEmail = process.env.BAND_EMAIL;
  const bandPass = process.env.BAND_PASS;
  const baseUrl = process.env.VERCEL_BRANCH_URL
    ? `https://${process.env.VERCEL_BRANCH_URL}`
    : "http://localhost:3000";
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
    attachDataUrls: true,
  });

  transporter.on("debug", (info) => {
    console.log("Nodemailer debug:", info);
  });

  // Email options for band notifier
  const bandMailOptions = {
    from: emailAddress,
    to: bandEmail, // Replace with your band's email
    subject: "New Subscriber",
    text: `${firstName} ${lastName} - ${emailAddress} has been added to the email list!`,
  };

  // Email options for new member
  const newMemberMailOptions = {
    from: bandEmail,
    to: emailAddress,
    subject: "🛌 Heyo! Thanks for connecting with us!",
    html: htmlBody,
    attachments: imageAttachments,
  };

  const newReleaseOptions = {
    from: bandEmail,
    to: emailAddress,
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
    await transporter.sendMail(newMemberMailOptions);
    console.log("New member email sent");

    // Prepare data for Google Sheets
    const sheetData = {
      timestamp: new Date().toISOString(),
      firstName: firstName,
      lastName: lastName,
      emailAddress,
      emailAddress,
    };

    // Send data to Google Sheets
    await axios.post(webAppURL, sheetData);
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
