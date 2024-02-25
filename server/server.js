import express from "express";
import notes from "./routes/notes.js";
import mongoose from "mongoose";
import morgan  from 'morgan';

const app = express()
app.use(express.json())
const _port = 3000
app.use(morgan("dev"));
app.use("/api/v1/notes",notes)


mongoose.connect(`mongodb+srv://soufianenakata7:9ZNSSHCN65QekB2p@cluster0.myo2rpg.mongodb.net/All-data?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => {
    app.listen(_port,(req , res) => {
      console.log(`http://localhost:${_port}`)
    })
  })
  .catch(err => console.log(err))