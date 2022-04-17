import mongoose from "mongoose";

export interface IContactInfoModel extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  phone: string;
  email: string;
  address: string;
  social: {
    facebook: string;
    youtube: string;
    twitter: string;
    tiktok: string;
    instagram: string;
    zalo: string;
  };
}

const schema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    social: {
      facebook: String,
      youtube: String,
      twitter: String,
      tiktok: String,
      instagram: String,
      zalo: String,
    },
  },
  {
    collection: "contact_infos",
    timestamps: true,
  }
);

export const ContactInfo =
  mongoose.models.contact_infos ||
  mongoose.model<IContactInfoModel>("contact_infos", schema);
