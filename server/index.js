const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getJoke, addUrJoke, deleteJoke } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune)

app.get("/api/joke", getJoke)

app.post("/api/joke", addUrJoke)

app.delete("/api/joke/:id", deleteJoke)

app.listen(4000, () => console.log("Server running on 4000"));
