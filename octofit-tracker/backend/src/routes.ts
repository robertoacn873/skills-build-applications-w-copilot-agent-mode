import { Router } from 'express';
import { baseUrl } from './config';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend' });
});

router.get('/config', (_req, res) => {
  res.json({ baseUrl });
});

export default router;
