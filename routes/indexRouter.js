const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");


router.get("/", messageController.getAllMessages);

router.get("/new", (req, res) => {
    res.render("form");
});

router.post("/new", messageController.createMessage);

router.get("/messages/:id", messageController.getMessageDetails);

module.exports = router;