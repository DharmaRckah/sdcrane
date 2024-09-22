import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
   
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      required: true,
      default: 0,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    slug:{
        type:String,
        
    }
    
 
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("user", userSchema);
