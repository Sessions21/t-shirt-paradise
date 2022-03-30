const mongoose = require('mongoose');
const { Schema } = mongoose;
const dateFormat = require("../utils/dateFormat");

const tShirtSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    brand: {
      type: String,
    },
    description: {
      type: String,
      trim: true
    },
    createdBy: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    // image or image arr. Might work better with image as it's own schema
    
    // category currently in it's own file might be able to just add it to tshirt

    // Use comment schema
    comments: [CommentSchema],
  }
);

const CommentSchema = new Schema(
  {
    writtenBy: {
      type: String,
      required: true,
    },
    commentBody: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    // use ReplySchema to validate data for a reply
    // replies: [ReplySchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const TShirt = mongoose.model('TShirt', tShirtSchema);

module.exports = TShirt;