const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://crubanraj10:Rexanrubanraj003%40@ruban.3azcvxx.mongodb.net/crudDb?retryWrites=true&w=majority',(err)=>{

    if(!err){
        console.log("MongoDB connection succeded..");
    }
    else{
        console.log("Error in Db connection:"+ JSON.stringify(err,undefined,2));
    }
});

module.exports = mongoose;