const mongoose=require('mongoose');

const mongoUrl=process.env.mongoUrl

const dbConnect=async()=>{ 
    try {
        const response=mongoose.connect(mongoUrl,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("Mongodb is connected");
    } catch (error) {
        console.log("Mongodb is not connected because of "+error);
    }
}

module.exports={dbConnect}