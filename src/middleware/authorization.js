const bloggModel = require("../models/blogg.model");
const authorization = async function (req, res, next) {
  try {
    let x = req.params.id;
    let db = await bloggModel.findOne({ _id: x });
    if (!db) return res.status(404).send({ message: "data not found" });
    let y = db.author_id.toString();
    let Id=req.author_id.toString();
    if (Id == y) {
      next();
    } else {
      res.status(403).send({ message: "unauthorized user" });
    }
  } catch (error) {
    //console.log(error);
    return res.status(500).send({ message: "Internal server Error" });
  }
};

module.exports = { authorization };


