import mongoose from "mongoose";

export interface ITagModel extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  status: boolean;
}

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

export const Tag = mongoose.model<ITagModel>("tag", schema);
