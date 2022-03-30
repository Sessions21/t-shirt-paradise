const mongoose = require('mongoose');
const { Schema } = mongoose;

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
    },
    // image or images maybe make it it's own schema
    
    // move category to its own schema
    /*
    category: {
      type: String,
      trim: true
    },
    */

    // comments, create comment model
  }
);

const TShirt = mongoose.model('TShirt', tShirtSchema);

module.exports = TShirt;