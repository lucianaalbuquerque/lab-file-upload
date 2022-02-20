const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, "Content is required."],
    },
    creatorId: [{ type: Schema.Types.ObjectId, ref: "User" }],
    picPath: {
      type: String,
      required: true
    },
    picName: String
  },
  {
    timestamps: true
  }
);

module.exports = model("Post", postSchema);