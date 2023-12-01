const express=require("express");
const router=express.Router();
const controller=require("../controllers/blogg.controller");
const {authentication}=require("../middleware/authentication");
const {authorization}=require("../middleware/authorization")
router.post("/createBlogg",authentication,controller.createBlogg);
router.get("/getBlogg/:id",authentication,controller.getBloggById);
router.get("/getAllBlogg",authentication, controller.getAllBlogg);
router.put("/updateBlogg/:id",authentication,authorization,controller.updateBlogg);
router.delete("/deleteBlogg/:id",authentication,authorization,controller.deleteBloggById);


module.exports=router;

