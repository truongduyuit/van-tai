import mongoose from "mongoose";

export interface ICommentModel extends mongoose.Document {
  id: mongoose.Types.ObjectId;
  account_id: string;
  movie_id: mongoose.Types.ObjectId;
  limit: number;
  products: string[];
}

const schema = new mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
  },
  account_id: {
    type: String,
    required: true,
  },
  limit: {
    type: Number,
    required: true,
  },
  products: [
    {
      type: String,
    },
  ],
});

export const CommentModel = mongoose.model<ICommentModel>("accounts", schema);
