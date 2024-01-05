const mongoose=require('mongoose');

const dbConnect=async ()=>{
try {
    const response=await mongoose.connect('mongodb+srv://shoaibakhter181422:todo@cluster0.x3d8fsb.mongodb.net/',{useNewUrlParser: true,
    useUnifiedTopology: true,})
    console.log("database is connected");
} catch (error) {
    console.log(error);
}
}

module.exports={dbConnect};