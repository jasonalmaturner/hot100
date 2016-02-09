import mongoose from 'mongoose';

const startupSchema = new mongoose.Schema({
  contactEmail: { type: String, index: true },
  contactName: { type: String, index: true },
  contactPhone: { type: String },
  facebookVotes: {
    
  }
})
