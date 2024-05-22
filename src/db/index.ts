import mongoose from "mongoose";

export default async function connectToDB(){
    try {
        await mongoose.connect("mongodb+srv://basu:basu0303@cluster0.qr2kzda.mongodb.net/")
        console.log("Connected to DB successfully")
    } catch (error) {
        console.log(error)
    }
}