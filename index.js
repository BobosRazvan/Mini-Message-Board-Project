const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 8000;


app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];



app.get("/", (req, res) => {
    res.render("index.ejs",{ messages: messages });
});


app.get('/new', (req, res) => {
    res.render("newmessage.ejs");
});

app.post('/new', (req, res) => {

    messageUser = req.body.user;
    messageText = req.body.text;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/");

});


app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});