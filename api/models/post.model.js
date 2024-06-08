import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      //If someone not post image, in that case this will be the default image.
      default:
        "https://img.freepik.com/free-vector/blogging-concept_23-2148003891.jpg?size=338&ext=jpg&ga=GA1.1.967060102.1716854400&semt=ais_user",
    },
    category: {
      type: String,
      default: "uncategorized",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
