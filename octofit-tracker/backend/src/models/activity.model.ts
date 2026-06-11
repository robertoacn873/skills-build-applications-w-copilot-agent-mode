import { Schema, model, Types } from 'mongoose';

const activitySchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true, trim: true },
    durationMin: { type: Number, required: true, min: 0 },
    calories: { type: Number, min: 0 },
    occurredAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Activity = model('Activity', activitySchema);
