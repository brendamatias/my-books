import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const connectDB = () => {
  if (mongoose.connections[0].readyState) {
    return;
  }

  mongoose.connect(MONGODB_URI, {}, (err) => {
    if (err) throw err;
  });
};

export default connectDB;
