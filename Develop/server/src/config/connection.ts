import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI 
  || 'mongodb://127.0.0.1:27017/socialNetworkDB'

export function connectDB() {
  return mongoose.connect(MONGODB_URI)
}

export const db = mongoose.connection
