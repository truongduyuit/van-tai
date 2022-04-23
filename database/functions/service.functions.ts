import { MongooseBaseService } from "..";
import { IServiceModel, ServiceModel } from "../models/service.model";

export const ServiceFuntions = Object.freeze(
  new MongooseBaseService<IServiceModel>(ServiceModel)
);
