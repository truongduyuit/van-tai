import { MongooseBaseService } from "..";
import { Account, IAccountModel } from "../models/account.model";

export const AccountFuntions = new MongooseBaseService<IAccountModel>(Account);
