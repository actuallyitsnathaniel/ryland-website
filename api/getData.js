import nodemailer from "nodemailer";

const handler = (req, res) => {
  const { firstName, lastName, emailAddress } = req.query; // Extracting query parameters

  const bandEmail = process.env.BAND_EMAIL;
  const bandPass = process.env.BAND_PASS;

  // Creating Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: bandEmail,
      pass: bandPass,
    },
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
    text: `${firstName},

Thanks so much for signing up! Now you're IN. You'll be the first to hear about anything new with us.
No need to think about this further, we'll tell you when we're ready. 🫡`,
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
