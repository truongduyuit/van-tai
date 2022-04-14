import { MongooseBaseService } from "..";
import { IMenuModel, Menu } from "../models/menu.model";

export const MenuFuntions = new MongooseBaseService<IMenuModel>(Menu);
