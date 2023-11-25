const express = require("express")
const serverless = require("serverless-http")

const api = express()

const router = express.Router()
router.get("/hello", (req, res) => res.send("Hello world"))

api.use("/.netlify/functions/api/", router)

exports.handler = serverless(api)
