"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const config_1 = require("./config");
const router = (0, express_1.Router)();
router.get('/health', (_req, res) => {
    res.json({ status: 'ok', service: 'octofit-backend' });
});
router.get('/config', (_req, res) => {
    res.json({ baseUrl: config_1.baseUrl });
});
exports.default = router;
