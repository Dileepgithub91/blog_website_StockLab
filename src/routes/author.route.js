const express=require("express");
const router=express.Router();

const controller=require("../controllers/author.controller");

router.post("/register",controller.registerAuthor);
router.post("/loginAuthor",controller.loginAuthor);



module.exports=router;



