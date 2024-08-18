import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mauryaharsh464:mauryaharsh464blogapp@cluster0.ayjyl.mongodb.net/blog-app"
    );
    console.log("DB connected");
  } catch (error) {
    console.log("Error on Db connection");
  }
};

export { connectDB };
