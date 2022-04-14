import { MongooseBaseService } from "..";
import { IPostModel, Post } from "../models/post.model";

export const PostFuntions = new MongooseBaseService<IPostModel>(Post);
