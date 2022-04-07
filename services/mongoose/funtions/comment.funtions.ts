import { MongooseBaseService } from "..";
import { CommentModel, ICommentModel } from "../models/comments.model";

export const CommentFuntions = new MongooseBaseService<ICommentModel>(
  CommentModel
);
