import jwt from 'jsonwebtoken';

export const requireAuth = (req,res,next) => {
  // ila makantch ga3 had l propirtie li smitha authorization li ktji mn req.header idan l user ga3ma dyr login
  const {authorization} = req.headers
  if(!authorization){
    return res.status(400).json({
      succes:false,
      error:"You must be logged in"
    })
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token,'jjj', async(err,payload) => {
    if(err){
      return res.status(401).json({
        succes:false,
        error:err.message
      })
    }
    const {id} = payload
    // const userId = await User.findById(id).select("_id")
    req.userId = id
    next()
  })
}