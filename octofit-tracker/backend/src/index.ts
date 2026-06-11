import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { API_PORT, MONGO_URI } from './config';
import { connectDatabase } from './db';
import apiRouter from './routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({
    message: 'OctoFit Tracker API',
    mongoUri: MONGO_URI,
    apiPrefix: '/api',
  });
});

app.use('/api', apiRouter);

async function bootstrap() {
  try {
    await connectDatabase();
    app.listen(API_PORT, '0.0.0.0', () => {
      console.log(`Backend running on http://localhost:${API_PORT}`);
    });
  } catch (error) {
    console.error('Failed to start backend:', error);
    process.exit(1);
  }
}

void bootstrap();
