// The required 3line in this file
import express from "express";
const app = express()
app.use(express.json())
const _port = 3000

import notes from "./routes/notes.js";
import users from "./routes/users.js";
import mongoose from "mongoose";
import morgan  from 'morgan';

app.use(morgan("dev"));
app.use("/api/v1/notes",notes)
app.use("/api/v1/users",users)

mongoose.connect(`mongodb+srv://soufianenakata7:9ZNSSHCN65QekB2p@cluster0.myo2rpg.mongodb.net/All-data?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => {
    app.listen(_port,(req , res) => {
      console.log(`http://localhost:${_port}`)
    })
  })
  .catch(err => console.log(err))