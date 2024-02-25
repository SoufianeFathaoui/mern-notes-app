import express from "express";
const router =  express.Router()
import {getNotes , getSingalNotes , createNotes, updateNote , deletNote} from '../controllers/notes.js';
import { get } from "mongoose";

router.route("/").get(getNotes).post(createNotes)
router.route("/:id").get(getSingalNotes).put(updateNote).delete(deletNote)

// router.get("/",getNotes)
// router.get("/:id",getSingalNotes)
// router.post("/",createNotes)
// router.put("/:id",updateNote)
// router.delete("/:id",deletNote)

export default router;
