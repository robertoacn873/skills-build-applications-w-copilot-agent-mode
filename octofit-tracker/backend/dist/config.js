"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseUrl = exports.codespaceName = exports.MONGO_URI = exports.MONGO_DB_NAME = exports.MONGO_PORT = exports.API_PORT = void 0;
exports.API_PORT = Number(process.env.PORT || 8000);
exports.MONGO_PORT = Number(process.env.MONGO_PORT || 27017);
exports.MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'octofit_db';
exports.MONGO_URI = process.env.MONGO_URI || `mongodb://127.0.0.1:${exports.MONGO_PORT}/${exports.MONGO_DB_NAME}`;
exports.codespaceName = process.env.CODESPACE_NAME;
exports.baseUrl = exports.codespaceName
    ? `https://${exports.codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
