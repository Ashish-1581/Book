import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
   
    author: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
   
  },
  { timestamps: true }
);

export default mongoose.model("books", bookSchema);
