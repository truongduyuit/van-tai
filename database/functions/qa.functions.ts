import { MongooseBaseService } from "..";
import { IQAModel, QA } from "../models/qa.model";

export const QAFunctions = new MongooseBaseService<IQAModel>(QA);
