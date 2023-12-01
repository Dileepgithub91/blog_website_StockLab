const authorModel = require("../models/author.model")

//=============create author ==============

exports.registerAuthor = async (author) => {
    return await authorModel.create(author)
}

// check email already exists
exports.checkEmail = async (email) => {
    return await authorModel.findOne({email})
}