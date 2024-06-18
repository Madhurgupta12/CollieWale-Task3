const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
const {connectDB}=require("./db/db");
const dotenv=require('dotenv');
const ColieData=require("./routes/ColieData")

dotenv.config();




app.use("/api",ColieData);





app.listen(4000,(req,res)=>{
console.log(`server listening on 4000`);
})
connectDB();