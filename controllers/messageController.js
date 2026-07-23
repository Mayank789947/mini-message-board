const messages  = require("../messageData");

function createMessage(req, res) {
    const { author, messageText } = req.body;

    if (!author || !messageText) {
        return res.status(400).json({
            "success": false,
            "message": "data required to create new message"
        });
    }

    const newMessage = {
        text: messageText,
        user: author,
        added: new Date()
    }

    messages.push(newMessage);

    res.redirect("/");
}

module.exports = createMessage;