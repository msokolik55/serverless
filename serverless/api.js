const express = require("express")
const serverless = require("serverless-http")

const api = express()
const router = express.Router()

api.set('view engine', 'pug')

router.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

router.get("/hello", (req, res) => res.send("Hello world"))

api.use("/.netlify/functions/api/", router)

exports.handler = serverless(api)
