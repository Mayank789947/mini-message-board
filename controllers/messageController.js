const messages  = require("../messageData");

function createMessage(req, res) {
    const { user, messageText } = req.body;

    if (!user || !messageText) {
        return res.status(400).json({
            "success": false,
            "message": "data required to create new message"
        });
    }

    const newMessage = {
        id: messages.length + 1,
        text: messageText,
        user: user,
        added: new Date()
    }

    messages.push(newMessage);

    res.redirect("/");
}

function getMessageDetails(req, res) {
    const id = Number(req.params.id);

    const message = messages.find(message => message.id === id);

    if (!message) {
        return res.status(404).json({
            "success": false,
            "message": "No message found"
        });
    }

    res.render("messageDetails", { message: message });
}

module.exports = { createMessage, getMessageDetails };