import { MongooseBaseService } from "..";
import { IPostModel, Post } from "../models/post.model";

export const PostFuntions = Object.freeze(
  new MongooseBaseService<IPostModel>(Post)
);
