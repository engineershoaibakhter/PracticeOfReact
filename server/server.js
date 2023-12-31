const express=require('express');
const dotEnv=require('dotenv').config();
const mongoose=require('mongoose');

const PORT=process.env.PORT || 5000
const app=express();

app.get('/',(req,res,next)=>{
    console.log("Home page");
    next()
})

app.use(express.json())

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Connected to MongoDB")
    app.listen(PORT,()=>{
        console.log(`Server is running at ${PORT}`);
    })
}).catch((err)=>{
    console.log(err);
})


