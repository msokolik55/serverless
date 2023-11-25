import express from "express";
import serverless from "serverless-http";
import path from "path";
import bodyParser from "body-parser";
import pug from "pug";

const api = express();
const router = express.Router();

api.set("view engine", "pug");

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
	res.send(
		pug.renderFile(path.join("views", "index.pug"), {
			title: "Hey",
			message: "Hello there!",
		})
	);
});

router.get("/hello", (req, res) => res.send("Hello world"));

api.use("/.netlify/functions/api", router);

exports.handler = serverless(api);
