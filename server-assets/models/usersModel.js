import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  accessToken: { type: String },
  dateCreated: { type: Date },
  email: { type: String, index: true },
  
})
