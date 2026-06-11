import { Schema, model, Types } from 'mongoose';

const workoutSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true, trim: true },
    level: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' },
    durationMin: { type: Number, min: 0 },
    suggestedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Workout = model('Workout', workoutSchema);
