const express = require("express")
const app = express()
const _port = 3000

app.listen(_port,(req , res) => {
  console.log(`http://localhost:${_port}`)
})

app.get("/",(req,res) => {
  res.send("HELLO WORLD")
})