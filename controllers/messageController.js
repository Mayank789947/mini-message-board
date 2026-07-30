const { validationResult, matchedData } = require("express-validator");
const messageModel = require("../models/messageModel");

function renderMessageForm(req, res) {
    res.render("form", {
        errors: [],
        values: {}
    });
}

async function getAllMessages(req, res) {
    const messages = await messageModel.getAllMessages();

    res.render("index", {
        title: "Mini Message Board",
        messages
    });
}

async function createMessage(req, res) {
   const errors = validationResult(req);

   if (!errors.isEmpty()) {
     return res.status(400).render("form", { 
        errors: errors.array(),
        values: req.body
    });
   }

   const { text, username } = matchedData(req);

    await messageModel.createMessage(text, username)

    res.redirect("/");
}

async function getMessageDetails(req, res) {
    const id = Number(req.params.id);

    const message = await messageModel.getMessageById(id);

    if (!message) {
        return res.status(404).send("No message found");
    }

    res.render("messageDetails", { message: message });
}

module.exports = { 
    getAllMessages,
    createMessage, 
    getMessageDetails,
    renderMessageForm
};