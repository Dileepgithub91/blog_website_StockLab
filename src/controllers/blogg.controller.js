const bloggModel = require("../models/blogg.model");
const apiError=require("../utils/apiError");
const apiResponse=require("../utils/apiResponse")
const bloggService=require("../services/blogg.service")
//===================create blogg================
const createBlogg = async (req, res) => {
  try {
    const data = req.body;
    const {content, title } = data;
    if (!title) {throw new apiError(400, "title is mandatory")}
    
    if (!content) {throw new apiError(400, "content is mandatory")}
    data.author_id=req.author_id;
    const savedBlogg = await bloggService.createBlogg(data);
    res.send(new apiResponse(201, savedBlogg, "Blog created successfully"))
  } catch (error) {
    console.log(error);
    res.status(500).send({message:"Server Error",error})
  }
};

//===============get Blogg by id============
const getBloggById = async (req, res) => {
  try {
    const id = req.params.authorId;
   
    const bloggData = await bloggService.getBlogg(id);

    if (!bloggData){throw new apiError(404, "Blogg not found for the given Id")}
    res.send(new apiResponse(200, bloggData, "Blogg retrieved successfully"))
  } catch (error) {
    console.log(error);
    res.status(500).send({message:"Server Error",error})
}
};

//================ get all Details===============
const getAllBlogg = async (req, res) => {
  try {
    
    const blogg = await bloggService.getAllBloggs();
    if (!blogg){throw new apiError(404, "Blogg not found ")}
    res.send(new apiResponse(200, blogg, "All  Blogg  reterive Successfully"))
    
  } catch (error) {
    console.log(error);
    res.status(500).send({message:"Server Error",error})
};
}

//====================update Blogg by id===================

const updateBlogg = async (req, res) => {
  try {
    const bloggId = req.params.id;
    if (!bloggId) {
      throw new apiError(400, "pls provide Blogg Id ")
      
      }
    const updateData = req.body;
    const {content, title } = updateData;
    const updatedBlogg = await bloggService.updateBlogg(bloggId,content,title);
    if (!updatedBlogg) {
      throw new apiError(404, "Blogg not found for the given Id ")
  
    }
    res.send(new apiResponse(200, updatedBlogg, "Blogg updated successfully"))
  } catch (error) {
    console.log(error);
   res.status(500).send({message:"Server Error",error})
}
};

//=========================Delete Blogg===============

const deleteBloggById = async (req, res) => {
  try {
    const id  = req.params.id;
    console.log(id)
    if (!id) {
        return res
          .status(400)
          .send({ status: false, message: "pls provide Blogg Id" });
      }
    const deleteBlogg = await bloggService.deleteBlogg(id);
    res.send(new apiResponse(200, deleteBlogg , "successfully deleted Blogg"))
  } catch (error) {
    console.log(error);
    res.status(500).send({message:"Server Error",error})
}
};

module.exports = {
  createBlogg,
  getBloggById,
  getAllBlogg,
  updateBlogg,
  deleteBloggById,
};


