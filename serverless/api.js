const express = require("express")
const serverless = require("serverless-http")
const path = require("path")
const bodyParser = require("body-parser")
const pug = require("pug")

const app = express()
const router = express.Router()

app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

router.get('/pug', (req, res) => {
    // res.send(pug.renderFile(path.join("views", "index.pug"), { title: 'Hey', message: 'Hello there!' }))
    res.render(path.join("views", "index.pug"), { title: 'Hey', message: 'Hello there!' })
})

router.get("/hello", (req, res) => res.send("Hello world"))

app.use("/.netlify/functions/api", router)

exports.handler = serverless(app)
