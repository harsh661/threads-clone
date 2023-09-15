import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  bio: String,
  image: String,
  threads: [
    {
        id: mongoose.Schema.Types.ObjectId,
        ref: 'Threads'
    }
  ]
})

const User = mongoose.models.User || mongoose.model('User', UserSchema)

export default User
