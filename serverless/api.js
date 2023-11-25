const express = require("express")
const serverless = require("serverless-http")
const path = require("path")
const bodyParser = require("body-parser")
const pug = require("pug")

const app = express()
const router = express.Router()

app.engine("pug", pug.__express)
// app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("views"))

router.get('/', (req, res) => {
    // res.send(pug.render("h1= title", { title: "hello" }))
    console.log(__dirname)
    res.send(pug.renderFile(path.join("views", "index.pug"), { title: 'Hey', message: 'Hello there!' }))
    // res.render('index', { title: 'Hey', message: 'Hello there!' })
})

router.get("/hello", (req, res) => res.send("Hello world"))

app.use("/.netlify/functions/api/", router)

exports.handler = serverless(app)
