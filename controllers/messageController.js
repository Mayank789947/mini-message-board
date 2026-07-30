const messageModel = require("../models/messageModel");

async function getAllMessages(req, res) {
    const messages = await messageModel.getAllMessages();

    res.render("index", {
        title: "Mini Message Board",
        messages
    });
}

async function createMessage(req, res) {
    const { text, username } = req.body;

    if (!text || !username) {
        return res.status(400).send("data required to create new message");
    }

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
    getMessageDetails
};