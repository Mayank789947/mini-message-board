const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");
const messages = require("../messageData")

router.get("/", (req, res) => {
    res.render("index", { title: "Mini messageBoard", messages: messages });
});

router.get("/new", (req, res) => {
    res.render("form");
});

router.post("/new", messageController);

module.exports = router;