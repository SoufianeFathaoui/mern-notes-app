import note from '../models/Note.js';

export const getNotes = async (req , res) => {
  try {
    const notes = await note.find()
    res.status(200).json({
      success:true,
      data:notes,
    })
  } catch (error) {
    res.status(400).json({
      success:false,
    })
  }
}
export const getSingalNotes = async (req,res) => {
  try {
    const note1 = await note.findById(req.params.id)
    if(!note1){
      return res.status(200).json({
        success:flase,
        error:"This note doesn't exixt"
      })
    }
    res.status(200).json({
      success:true,
      data:note1,
    })
  } catch (error) {
    res.status(400).json({
      success:false,
      error:error.message
    })
  }
}
export const createNotes = async (req , res) => {
  try {
    const note1 = await note.create(req.body)
    res.status(200).json({
      success:true,
      data:note1
    })
  } catch (error) {
    res.status(400).json({
      success:false,
      error:error.message,
    })
  }
}
export const updateNote = async (req , res) => {
  try {
    const note1 = await note.findById(req.params.id)
    if(!note1){
      return res.status(200).json({
        success:flase,
        error:"This note doesn't exixt"
      })
    }
    const update_note = await findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true,
    })
    res.status(200).json({
      success:true,
      data:update_note,
    })
  } catch (error) {
    res.status(400).json({
      success:false,
      error:error.message
    })
  }
}
export const deletNote = async (req , res) => {
  try {
    const note1 = await note.findByIdAndDelete(req.params.id)
    if(!note1){
      return res.status(200).json({
        success:false,
        error:"Not found!"
      })
    }
    res.status(200).json({
      success:true,
      data:{}
    })
  } catch (error) {
    res.status(400).json({
      success:false,
      error:error.message
    }) 
  }
}
