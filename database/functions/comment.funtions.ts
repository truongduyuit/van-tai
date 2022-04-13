import { MongooseBaseService } from "..";
import { CommentModel, ICommentModel } from "../models/account.model";

export const CommentFuntions = new MongooseBaseService<ICommentModel>(
  CommentModel
);
