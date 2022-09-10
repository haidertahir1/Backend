const express = require('express');
const app= express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const authRoute=require('./routes/auth');

dotenv.config();


mongoose
.connect(process.env.MONGO_URI)

.then(()=>console.log('DB connection successfull !'))
.catch((err)=>console.log(err));

app.use(express.json());
app.use("/api/auth" , authRoute);

app.listen(8080,()=>{
    console.log('backend is running !')
});