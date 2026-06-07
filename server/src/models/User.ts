import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

   email: {
  type: String,
  required: true,
  unique: true,
  match: [
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    "Please enter valid email",
  ],
},

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["Admin", "Sales User"],
      default: "Sales User",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model(
  "User",
  userSchema
);

export default User;