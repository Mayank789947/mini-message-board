# Mini Message Board

A simple message board application built with **Node.js**, **Express.js**, and **EJS**. Users can view all messages, create new messages, and view individual message details.

## Features

* View all messages on the home page
* Create a new message using a form
* View details of a single message
* Dynamic server-side rendering with EJS
* Clean and responsive UI using CSS
* Express routing and middleware
* In-memory data storage (no database)

## Tech Stack

* Node.js
* Express.js
* EJS
* HTML5
* CSS3

## Project Structure

```text
mini-message-board/
│
├── controllers/
│   └── messageController.js
│
├── routes/
│   └── messageRouter.js
│
├── views/
│   ├── index.ejs
│   ├── form.ejs
│   └── message.ejs
│
├── public/
│   └── styles.css
│
├── app.js
├── package.json
└── README.md
```

> Your project structure may vary slightly depending on how you've organized your files.

## Installation

1. Clone the repository.

```bash
git clone <repository-url>
```

2. Navigate to the project directory.

```bash
cd mini-message-board
```

3. Install dependencies.

```bash
npm install
```

4. Start the server.

```bash
node app.js
```

If you're using **nodemon**:

```bash
npm run dev
```

## Usage

Open your browser and visit:

```text
http://localhost:3000
```

From there you can:

* Browse all messages
* Create a new message
* View an individual message

## Routes

| Method | Route           | Description               |
| ------ | --------------- | ------------------------- |
| GET    | `/`             | Display all messages      |
| GET    | `/new`          | Show the new message form |
| POST   | `/new`          | Create a new message      |
| GET    | `/messages/:id` | Display a single message  |

## Message Object

Each message contains the following properties:

```javascript
{
  id: 1,
  user: "John",
  text: "Hello, Express!",
  added: new Date()
}
```

## Learning Objectives

This project helped reinforce the following Express.js concepts:

* Express application setup
* Routing
* Route parameters
* GET and POST requests
* Middleware (`express.urlencoded()`)
* Serving static files
* Template rendering with EJS
* Passing data from controllers to views
* Basic MVC project structure

## Future Improvements

* Edit existing messages
* Delete messages
* Persist data using a database (MongoDB/PostgreSQL)
* Form validation
* Flash messages
* User authentication
* Pagination
* Search functionality

## License

This project is created for learning purposes.
