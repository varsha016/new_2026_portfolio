import mongoose, { Schema, models, model } from "mongoose";

const ContactSchema = new Schema(
  {
    fName: { type: String, required: true },
    lName: { type: String },
   email: {
  type: String,
  required: true,
  match: [/^\S+@\S+\.\S+$/, "Please use a valid email"],
},
    sub: { type: String },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const ContactModel =
  models.Contact || model("Contact", ContactSchema);

export default ContactModel;