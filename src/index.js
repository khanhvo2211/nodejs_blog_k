const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

const handlebars = require("express-handlebars");

app.use(express.static(path.join(__dirname, "public")));

//express/conect morgan
app.use(morgan("combined"));
//handlebar
app.engine(".hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

// app.get("/", function (req, res) {
//   res.send("Hello Khanh Sky");
// });
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/search", (req, res) => {
  res.render("search");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
