import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    profile: {
      age: { type: Number, min: 0 },
      weightKg: { type: Number, min: 0 },
      heightCm: { type: Number, min: 0 },
    },
  },
  { timestamps: true }
);

export const User = model('User', userSchema);
