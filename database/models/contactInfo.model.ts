import mongoose from "mongoose";

export interface IContactInfoModel extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  phone: string;
  email: string;
  address: string;
  facebook: {
    id: string;
    fanpage: string;
    person: string;
  };
  zalo: string;
}

const schema = new mongoose.Schema(
  {
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    facebook: {
      id: {
        type: String,
      },
      fanpage: {
        type: String,
      },
      person: {
        type: String,
      },
    },
    zalo: {
      type: String,
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
