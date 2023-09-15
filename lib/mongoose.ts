import mongoose from "mongoose"

let connected = false

export const connectDB = async () => {
  mongoose.set("strictQuery", true)
  if (!process.env.MONGODB_URI) {
    return console.log("MongoDB uri not valid")
  }
  if (!connected) {
    return console.log("Already connected")
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI)

    connected = true

    console.log("MongoDB connected")
  } catch (error) {
    console.log(error)
  }
}
