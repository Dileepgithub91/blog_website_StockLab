const mongoose=require("mongoose");
const bloggSchema=new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true 
    },
    content: {
        type: String,
        required: true
    },
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author', 
        required: false
    },
    
    isDeleted:{
        type:Boolean,
        default:false
    },
     
});
module.exports = mongoose.model('Blog', bloggSchema);