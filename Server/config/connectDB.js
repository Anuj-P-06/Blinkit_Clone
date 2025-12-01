import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

if (!process.env.MONGODB_URI){
    throw new Error(
        "Please provide MONGODB_URI in the .env file"
    )
}

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to DB")
    }
    catch (error){
        console.log("Mongodb connection errror",error)
        process.exit(1) // 0 successfull and 1 unsuccessfull
    }
}

export default connectDB;

