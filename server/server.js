import express from "express";
import notes from "./routes/notes.js";
const app = express()
app.use(express.json())
const _port = 3000

app.use("/api/v1/notes",notes)

app.listen(_port,(req , res) => {
  console.log(`http://localhost:${_port}`)
})