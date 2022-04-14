import mongoose from "mongoose";

export interface IQAModel extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  question: string;
  answer: string;
  status: boolean;
}

const schema = new mongoose.Schema({
  question: {
    type: String,
    unique: true,
    required: true,
  },
  answer: {
    type: String,
    unique: true,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

export const QA = mongoose.model<IQAModel>("qa", schema);
