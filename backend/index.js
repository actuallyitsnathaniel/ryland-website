// server/index.js
import express from "express";
import { json } from "body-parser";
import { Pool } from "pg";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;
  try {
    const client = await pool.connect();
    await client.query("INSERT INTO subscribers(email) VALUES($1)", [email]);
    client.release();
    res.status(200).send({ message: "Subscription successful" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed to subscribe" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
