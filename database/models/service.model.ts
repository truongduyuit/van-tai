import mongoose from "mongoose";

export interface IServiceModel extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  description: string;
  path: string;
  status: boolean;
}

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    description: String,
    path: String,
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "services",
  }
);

export const ServiceModel =
  mongoose.models.services || mongoose.model<IServiceModel>("services", schema);
