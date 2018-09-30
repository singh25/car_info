const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static('resources'))
app.get('/', (req, res)=> res.render("main"));


app.listen(process.env.PORT);
