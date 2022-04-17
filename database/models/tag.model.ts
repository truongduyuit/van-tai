import mongoose from "mongoose";

export interface ITagModel extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  status: boolean;
}

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "tags",
    timestamps: true,
  }
);

export const Tag =
  mongoose.models.tags || mongoose.model<ITagModel>("tags", schema);
