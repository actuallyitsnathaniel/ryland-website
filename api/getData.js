import nodemailer from "nodemailer";

// Vercel deployment protection must be OFF
const handler = (req, res) => {
  const { firstName, lastName, emailAddress, htmlBody } = req.query; // Extracting query parameters

  const bandEmail = process.env.BAND_EMAIL;
  const bandPass = process.env.BAND_PASS;
  const baseUrl = process.env.VERCEL_BRANCH_URL
    ? `https://${process.env.VERCEL_BRANCH_URL}`
    : "http://localhost:3000";

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
    to: "nathanielrbowman@gmail.com", // Replace with your band's email
    subject: "New Subscriber",
    text: `${firstName} ${lastName} - ${emailAddress} has been added to the email list!`,
  };

  // Email options for new member
  const newMemberMailOptions = {
    from: "nathanielrbowman@gmail.com",
    to: emailAddress,
    subject: "🛌 Heyo! Thanks for connecting with us!",
    html: htmlBody,
    attachments: [
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
    ],
  };

  // Sending emails
  transporter.sendMail(bandMailOptions, (error, info) => {
    if (error) {
      console.error("Error sending band notifier email:", error);
      // Handle error appropriately
    } else {
      console.log("Band notifier email sent:", info.response);
      // Handle success appropriately
    }
  });

  transporter.sendMail(newMemberMailOptions, (error, info) => {
    if (error) {
      console.error("Error sending new member email:", error);
      res.status(500).send("Failed to send emails");
    } else {
      console.log("New member email sent:", info.response);
      res.status(200).json({ message: "Emails sent successfully" });
    }
  });
};

export default handler;
