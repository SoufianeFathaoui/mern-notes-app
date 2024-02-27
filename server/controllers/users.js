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
  const {email,password} = req.body
  if(!validator.isEmail(email)){
    res.status(400).json({
      success:false,
      error:"Please enter a valid email"
    })
  }
  try {
    const ifUserExist = await User.findOne({email})
    const isMatch = await bcrypt.compare(password,ifUserExist.password)
    if(!ifUserExist || !isMatch){
      return res.status(400).json({
        success:false,
        error:"This user doesn't exist"
      })
    }
    const token = generateToken(ifUserExist._id)
    res.status(200).json({
      success:true,
      User:ifUserExist.email
    })
  } catch (error) {
    res.status(400).json({
      success:false,
      error:error.message
    })
  }
}