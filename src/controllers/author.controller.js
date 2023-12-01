const authorModel = require("../models/author.model");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const validate=require("../validation/validate")
const apiResponse=require("../utils/apiResponse");
const { hashPassword, matchPassword } = require("../helper/helper")
const apiError=require("../utils/apiError")
const authorService=require("../services/author.service");
const registerAuthor = async (req,res) => {
  try {
      const authorData = req.body;
      const {name,email,password } = authorData
      if(!name){throw new apiError(400, "name is mandatory")}
      if(!validate.validateName(name)){throw new apiError(400,"please provide  name in string")}
      if(!email){throw new apiError(400, "Email is mandatory")}
      if(!validate.validateEmail(email)){{throw new apiError(400, "pls provide valid email format")}}
      if(!password){throw new apiError(400, "password is mandatory")}
      if(!validate.validatePassword(password)){throw new apiError(400, "pls provide strong password( example for Dileep@123)")}

const existedAuthor= await authorService.checkEmail(email)
    
    if(existedAuthor){
        throw new apiError(409," email  is already exists")
    }
      authorData.password = await hashPassword(password)
      const registeredAuthor = await authorService.registerAuthor(authorData);
      return res.send(new apiResponse(201, registeredAuthor, "Author registered successfully"));
      
  } catch (error) {
    console.log(error);
    res.status(500).send({message:"Server Error",error})
  }
}

const loginAuthor=async(req,res,next)=>{
  try {
      const authorData = req.body;
      const {email, password} = authorData 
      if(!email){return res.status(400).send({status : false, message : "email is mandatory"})}
      if(!password){return res.status(400).send({status : false, message : "password is mandatory"})}

      const findAuthor= await authorModel.findOne({email})

      if(!findAuthor){
          return res.status(404).send({status : false, message : " Author not found"})  ; 
      }
    
      const matchedPassword = await matchPassword(password, findAuthor.password)
      if(!matchPassword){
          return res.status(400).send({status : false, message : "Invalid Password"});
      }
       const token=jwt.sign({author_id:findAuthor._id},"my-secret-key",{expiresIn:"10h"});
        res.setHeader("token",token)
      return res.status(200).send({status:true, message:"Token is SuccessFully Generated",token});
      
  } catch (error) {
    console.log(error);
    res.status(500).send({message:"Server Error",error})
}
}
module.exports={registerAuthor,loginAuthor};





