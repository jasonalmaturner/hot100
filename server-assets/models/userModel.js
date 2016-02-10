import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  accessToken: { type: String },
  dateCreated: { type: Date },
  email: { type: String, index: true },
  firstName: { type: String },
  lastName: { type: String },
  fullName: { type: String, index: true },
  gender: { type: String },
  id: { type: String, index: true },
  link: { type: String },
  picture: { type: String },
  role: { type: String },
  overallVotes: {
    value: { type: Number },
  },
});

export default mongoose.model('Users', userSchema);
