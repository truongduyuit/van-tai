import mongoose from "mongoose";
import { IAccountModel, ITagModel } from ".";

export interface IPostModel extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  title: string;
  url: string;
  banner: string;
  tags: ITagModel[];
  creator: IAccountModel[];
  timestamp: Date;
  status: boolean;
}

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  banner: {
    type: String,
  },
  tags: [{ type: mongoose.Types.ObjectId, ref: "tag" }],
  creator: { type: mongoose.Types.ObjectId, ref: "account" },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: Boolean,
    default: true,
  },
});

export const Post = mongoose.model<IPostModel>("post", schema);
