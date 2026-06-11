"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const db_1 = require("./db");
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.json({
        message: 'OctoFit Tracker API',
        mongoUri: config_1.MONGO_URI,
        apiPrefix: '/api',
    });
});
app.use('/api', routes_1.default);
async function bootstrap() {
    try {
        await (0, db_1.connectDatabase)();
        app.listen(config_1.API_PORT, '0.0.0.0', () => {
            console.log(`Backend running on http://localhost:${config_1.API_PORT}`);
        });
    }
    catch (error) {
        console.error('Failed to start backend:', error);
        process.exit(1);
    }
}
void bootstrap();
