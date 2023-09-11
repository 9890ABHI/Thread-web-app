import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URl) return console.log("MONGODB_URL not found");
  if (isConnected) return console.log("Already connected to MONGODB");

  try {
    await mongoose.connect(process.env.MONGODB_URl);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
