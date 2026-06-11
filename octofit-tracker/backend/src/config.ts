export const API_PORT = Number(process.env.PORT || 8000);
export const MONGO_PORT = Number(process.env.MONGO_PORT || 27017);
export const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'octofit_db';

export const MONGO_URI =
  process.env.MONGO_URI || `mongodb://127.0.0.1:${MONGO_PORT}/${MONGO_DB_NAME}`;

export const codespaceName = process.env.CODESPACE_NAME;
export const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';
