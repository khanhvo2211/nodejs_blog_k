const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
const handlebars = require("express-handlebars");
const route = require("./routes");
//Serving static files in Express
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//route init
route(app);
//express/conect morgan
app.use(morgan("combined"));
//handlebar
app.engine(".hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
