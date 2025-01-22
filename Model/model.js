import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    templateName: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    logoUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const EmailTemplate = mongoose.model("EmailTemplate", emailSchema);

export default EmailTemplate;