import mongoose from "mongoose";

export async function connectDB() {
  try {
    console.log("mongodb connected");
    mongoose.connect("mongodb://127.0.0.1:27017/dbusers", {
      useNewUrlParser: true,
    });
  } catch (error) {console.log(error)}
}

const userSchema = new mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true, unique: true},
    password: {type: String, required: true}
})

export const connectModel = mongoose.model('users', userSchema) 