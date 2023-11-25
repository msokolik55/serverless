const express = require("express")
const serverless = require("serverless-http")
const path = require("path")
const bodyParser = require("body-parser")
const pug = require("pug")
const fs = require("fs")

const app = express()
const router = express.Router()

// app.engine("pug", pug.__express)
app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

router.get('/pug', (req, res) => {
    // res.send(pug.render("h1= title", { title: "hello" }))
    // fs.readdirSync(".").forEach(file => {
    //     console.log(file);
    // })
    // console.log(req)
    // res.send(pug.renderFile(path.join("views", "index.pug"), { title: 'Hey', message: 'Hello there!' }))

    res.render("h1= title", { title: "hello" })
})

router.get("/hello", (req, res) => res.send("Hello world"))

app.use("/.netlify/functions/api", router)

exports.handler = serverless(app)
