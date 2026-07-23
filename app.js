const express = require("express");
const app = express();
const path = require("node:path");
const indexRoutes = require("./routes/indexRouter");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));


app.use("/", indexRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});