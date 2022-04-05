const mongoose = require('mongoose');
const { Schema, Types } = mongoose;
// const dateFormat = require("../utils/dateFormat");

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
    username: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: (createdAtVal) => dateFormat(createdAtVal),
    },
    imageLink: {
      type: String,
      trim: true
    },
    // reference to comment model
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
  }
);

tShirtSchema.virtual('commentCount').get(() => {
  return this.comments.reduce((total, comment) => total + comment.replies.length + 1, 0);
});

const TShirt = mongoose.model('TShirt', tShirtSchema);

module.exports = TShirt;