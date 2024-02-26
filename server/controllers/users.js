import User from '../models/User.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({id},"jjj",{
    expiresIn:"3d"
  }
  )
}

export const register = async (req,res) => {
  const {email,password} = req.body
  if(!email || !password){
    return res.status(400).json({
      success:false,
      error:"Please provide an email and password"
    })
  }
  if(!validator.isEmail(email)){
    return res.status(400).json({
      success:false,
      error:"Please  enter a valid email"
    })
  }
  if(!validator.isStrongPassword(password)){
    return res.status(400).json({
      success:false,
      error:"Please enter a strong password"
    })
  }
  const isUserExist = await User.findOne({email})
  if(isUserExist){
    return res.status(400).json({
      success:false,
      error:"This user is already exist"
    })
  }
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    const savedUser = await new User({
      email,
      password:hashedPassword
    }).save()
    const token = generateToken(savedUser._id)
    res.status(200).json({
      success:true,
      token,
    })
  } catch (error) {
    res.status(500).json({
      success:false,
      error:error.message
    })
  }
}
export const login = async (req,res) => {
  try {
    
  } catch (error) {
    
  }
}