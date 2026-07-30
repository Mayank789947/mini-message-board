const { body } = require("express-validator");

const createMessageValidation = [
    body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .bail()
    .isLength({ min: 2, max: 50 })
    .withMessage("Username must be between 2 and 50 characters."),

    body("text")
    .trim()
    .notEmpty()
    .withMessage("Message is required")
    .bail()
    .isLength({ min: 1, max: 500 })
    .withMessage("Message length must be under 500 characters."),
];

module.exports = {
    createMessageValidation
}