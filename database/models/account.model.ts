import mongoose from "mongoose";

export interface IAccountModel extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  phone: string;
  password: string;
  name: string;
  status: boolean;
}

const schema = new mongoose.Schema({
  phone: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  status: {
    type: Boolean,
    default: true,
  },
});

export const Account = mongoose.model<IAccountModel>("account", schema);
