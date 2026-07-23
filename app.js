const express = require("express");
const app = express();
const path = require("node:path");

const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const links = [
    { href: "/", text: "Home" }
]

app.get("/", (req, res) => {
    res.render("index", { links: links });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});