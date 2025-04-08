import axios from "axios";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const app = express();

dotenv.config();

app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);

// Add this middleware to parse JSON bodies
app.use(express.json());

app.post("/api", (req, res) => {
  const { tempCity } = req.body;
  axios
    .get("http://api.weatherapi.com/v1/current.json", {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        key: process.env.WEATHER_API_KEY,
        q: tempCity,
      },
    })
    .then((response) => res.json(response.data))
    .catch((error) => res.json(error));
});

app.listen(3000, () => {
  console.log("Server is Running on Port 3000");
});
