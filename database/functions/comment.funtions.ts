import { MongooseBaseService } from "..";
import { Account, IAccountModel } from "../models/account.model";

export const CommentFuntions = new MongooseBaseService<IAccountModel>(Account);
