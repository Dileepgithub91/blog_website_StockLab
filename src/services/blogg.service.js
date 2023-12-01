const bloggModel = require("../models/blogg.model")

// ===================create blog====================
exports.createBlogg = async (blog) => {
    return await bloggModel.create(blog);
}


// ====================get all blogs=======================
exports.getAllBloggs = async () => {
    return await bloggModel.find({isDeleted: false }).select({ title: 1, content: 1, author: 1, _id : 1 })
}

//============= get blogg by id ==========================
exports.getBlogg = async (id) => {
    return await bloggModel.find({ author: id, isDeleted: false }).select({ title: 1, content: 1, _id : 0 })
}

//================ update the blogg=========================
exports.updateBlogg = async ( bloggId, title, content ) => {
    return await bloggModel.findOneAndUpdate({ _id: bloggId, isDeleted: false }, { $set: { title: title, content: content } }, { new: true })
}

// =============delete blog======================
exports.deleteBlogg = async (bloggId) => {
    return await bloggModel.findByIdAndUpdate(bloggId, { $set: { isDeleted: true } })
}