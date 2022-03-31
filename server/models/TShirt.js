const mongoose = require('mongoose');
const { Schema } = mongoose;
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
    createdBy: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: (createdAtVal) => dateFormat(createdAtVal),
    },
    // image or image arr. Might work better with image as it's own schema

    // category currently in it's own file might be able to just add it to tshirt

    // Use comment schema
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