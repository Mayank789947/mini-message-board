const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");
const { createMessageValidation } = require("../validate");


router.get("/", messageController.getAllMessages);

router.get("/new", messageController.renderMessageForm);

router.post("/new", createMessageValidation , messageController.createMessage);

router.get("/messages/:id", messageController.getMessageDetails);

module.exports = router;