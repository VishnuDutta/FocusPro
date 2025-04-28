import axios from "axios";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import https from "https";
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

// Create an HTTPS agent that disables SSL verification
const agent = new https.Agent({
  rejectUnauthorized: false, // Disables SSL verification
});

//Request to search weather
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

//Request to search for City
app.post("/searchapi", (req, res) => {
  const { searchedCity } = req.body;
  axios
    .get("https://api.api-ninjas.com/v1/city", {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.Seach_API_KEY,
      },
      params: {
        name: searchedCity,
      },
      httpsAgent: agent, // Use the custom HTTPS agent
    })
    .then((response) => res.json(response.data))
    .catch((error) => res.json(error));
});

//Request to generate quote
app.post("/quoteapi", (req, res) => {
  axios
    .get("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
      headers: {
        "x-rapidapi-key": process.env.Quotes_API_KEY,
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
      },
      httpsAgent: agent,
    })
    .then((response) => res.json(response.data))
    .catch((error) => res.json(error));
});

app.listen(3000, () => {
  console.log("Server is Running on Port 3000");
});
