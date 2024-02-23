import express from "express";
const router =  express.Router()

router.get("/:id",(req,res) => {
  res.send("Get a singal note")
})
router.post("/",(req,res) => {
  res.send("Create a new note")
})
router.put("/:id",(req,res) => {
  res.send("Update a singal note")
})

export default router;