import { Schema, model, Types } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: 'User', required: true },
    points: { type: Number, default: 0, min: 0 },
    rank: { type: Number, min: 1 },
  },
  { timestamps: true }
);

export const Leaderboard = model('Leaderboard', leaderboardSchema);
