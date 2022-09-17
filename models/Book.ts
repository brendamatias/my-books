import { Schema, models, model } from 'mongoose';

const BookSchema = new Schema(
  {
    book_id: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      unique: false,
      lowercase: false,
      trim: true,
    },
    author: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
    image: {
      type: String,
      required: false,
      unique: false,
      trim: true,
    },
    page_count: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    status: {
      type: String,
      enum: ['read', 'unread', 'wishlist'],
      default: 'unread',
    },
  },
  { timestamps: true }
);

export default models.Book || model('Book', BookSchema);
