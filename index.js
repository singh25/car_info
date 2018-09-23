const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static('resources'))
app.get('/', (req, res)=> res.render("main"));

var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.listen(8080, ip);
