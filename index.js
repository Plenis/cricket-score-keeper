const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const CricketScoreKeeper = require("./cricket-score-keeper");

const app = express();
const cricketScoreKeeper = CricketScoreKeeper();

app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main",
      extname: ".handlebars",
      layoutsDir: __dirname + "/views/layouts",
      partialsDir: __dirname + "/views/partials"
    })
  );

  app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.get("/", function(req, res) {
    console.log(req.body);
    cricketScoreKeeper.scoreKeeper();
    res.render("index");
  });

app.get("/add", function(req, res){
    console.log(req.body)
    cricketScoreKeeper.scoreKeeper()

    res.render("add", {overScoreTotal})
})

app.post("/add", function(req, res){
   cricketScoreKeeper.overScoreTotal()
   res.send("SCORE SHOULD DISPLAY :)")
    res.redirect("/")
})


const PORT = process.env.PORT || 3300;

app.listen(PORT, function() {
  console.log("App has started...");
});