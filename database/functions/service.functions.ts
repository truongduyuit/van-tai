import { MongooseBaseService } from "..";
import { IServiceModel, ServiceModel } from "../models/service.model";

export const ServiceFuntions = new MongooseBaseService<IServiceModel>(
  ServiceModel
);
