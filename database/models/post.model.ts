import mongoose from "mongoose";
import { IAccountModel } from ".";

export interface IPostModel extends mongoose.Document {
  _id: string;
  title: string;
  description: string;
  url: string;
  content: string;
  tags: string[];
  creator: IAccountModel;
  status: boolean;
}

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    url: {
      type: String,
    },
    content: {
      type: String,
    },
    tags: [{ type: String }],
    creator: { type: mongoose.Types.ObjectId, ref: "account" },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "posts",
    timestamps: true,
  }
);

export const Post =
  mongoose.models.posts || mongoose.model<IPostModel>("posts", schema);
