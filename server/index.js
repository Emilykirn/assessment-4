const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getFunny } = require('./controller')
const { getPicture } = require('./controller')
const { getRollDice } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/funny", getFunny);
app.get("/api/picture", getPicture);
app.get("/api/diceroll", getRollDice);


app.listen(4000, () => console.log("Server running on 4000"));
