var express = require("express"),
app = express();

app.get("/", function (req, res) {
	res.send("hello universe!");
});

var inspirationQuotes = [
  "The worst thing that could happen to you, is never the worst thing that could happen to you", 
  "Everybody hurts", "Hearts, rainbows, stars, and flowers." 
];

app.get("/inspiration", function (req, res) {
	res.send(inspirationQuotes[Math.floor(Math.random()*inspirationQuotes.length)]);
});

var jokes = [
	{ setup: "What did the zen buddhist say to the hot dog vendor?",
	  punchline: "Make me one with everything." },

	{ setup: "What did the mushroom say when asked what she looked for in a date?",
	  punchline: "A fun guy."},

	{ setup: "How many tickles does it take to make an octupus laugh?",
	  punchline: "Ten Tickles"},
];


app.get("/joke", function (req, res) {
	var randomJoke = Math.floor(Math.random()*jokes.length);
	res.send(jokes[randomJoke]);
});

console.log("server starting. available at http://localhost:3000");
app.listen (3000);

