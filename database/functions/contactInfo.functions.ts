import { MongooseBaseService } from "..";
import { ContactInfo, IContactInfoModel } from "../models/contactInfo.model";

export const ContactInfoFunction = Object.freeze(
  new MongooseBaseService<IContactInfoModel>(ContactInfo)
);
