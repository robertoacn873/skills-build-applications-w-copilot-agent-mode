import mongoose from 'mongoose';
import { MONGO_URI } from './config';

export async function connectDatabase(): Promise<void> {
  await mongoose.connect(MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
  });
}
