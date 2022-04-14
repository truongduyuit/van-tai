import { MongooseBaseService } from "..";
import { ContactInfo, IContactInfoModel } from "../models/contactInfo.model";

export const ContactInfoFunction = new MongooseBaseService<IContactInfoModel>(
  ContactInfo
);
