const express = require("express");
const pug = require("pug");
const bodyParser = require("body-parser");
const path = require("path");

const fixtures = require("./db/fixtures.json")

const PORT = process.env.PORT || 3000;

const app = express();
const router = express.Router();

app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
	res.send(pug.renderFile(path.join("views", "fixtures.pug"), { response: fixtures.response }));
});

app.use("/", router);

app.listen(PORT);
console.log("Listening on port: " + PORT);
