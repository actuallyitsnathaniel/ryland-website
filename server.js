// this server file is just for local development.
// Vercel will utilize the serverless function found in youConnectedEmail in place of this (... i think)
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Importing serverless function
import youConnectedEmail from "./api/youConnectedEmail.js";
import sendNewReleaseEmail from "./api/sendNewReleaseEmail.js";

app.get("/api/youConnectedEmail", youConnectedEmail);
app.post("/api/sendNewReleaseEmail", sendNewReleaseEmail);

app.listen(3001, () => {
  console.log("Local development server running on port 3001");
});
