import mongoose from "mongoose";

export interface ICommentModel extends mongoose.Document {
  name: string;
  email: string;
  movie_id: mongoose.Types.ObjectId;
  text: string;
  date: Date;
}

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  movie_id: {
    type: mongoose.Types.ObjectId,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
});

export const CommentModel = mongoose.model<ICommentModel>(
  "sample_mflix.comments",
  schema
);
