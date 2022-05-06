const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getJoke, postJoke, deleteJoke, updateJoke } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/joke", getJoke)
app.post("/api/addJoke", postJoke)
app.delete("/api/deleteJoke", deleteJoke)
app.put("./api/updateJoke", updateJoke)

app.listen(4000, () => console.log("Server running on 4000"));
