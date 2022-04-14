import { MongooseBaseService } from "..";
import { ITagModel, Tag } from "../models/tag.model";

export const TagFuntions = new MongooseBaseService<ITagModel>(Tag);
