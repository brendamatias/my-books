import { Schema, models, model } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
      lowercase: false,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    books: {
      type: Schema.Types.ObjectId,
      ref: 'Book',
    },
  },
  { timestamps: true }
);

export default models.User || model('User', UserSchema);
