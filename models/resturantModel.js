const mongoose = require("mongoose");

const resturantSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,"Resturant Title is required"]
    },
    imageURL

});


const resturantModel = mongoose.model("resturant", resturantSchema)
module.exports = resturantModel