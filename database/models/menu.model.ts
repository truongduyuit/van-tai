import mongoose from "mongoose";

export interface IMenuModel extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  label: string;
  childrens: {
    label: string;
    path: string;
  }[];
  path: string;
  status: boolean;
}

const schema = new mongoose.Schema({
  label: {
    type: String,
    unique: true,
    required: true,
  },
  childrens: [
    {
      label: {
        type: String,
        required: true,
      },
      path: {
        type: String,
        required: true,
      },
    },
  ],
  path: String,
  status: {
    type: Boolean,
    default: true,
  },
});

export const Menu = mongoose.model<IMenuModel>("menu", schema);
