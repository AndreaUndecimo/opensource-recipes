const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const recipeRouter = require("./routes/recipe.route");
const app = express();

dotenv.config();

const PORT = process.env.PORT || 3700;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/recipe", recipeRouter);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
