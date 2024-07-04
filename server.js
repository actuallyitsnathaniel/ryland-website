// this server file is just for local development.
// Vercel will utilize the serverless function found in getData in place of this (... i think)
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Importing serverless function
import getData from "./api/getData.js";

app.get("/api/getData", getData);

app.listen(3001, () => {
  console.log("Local development server running on port 3001");
});
