"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const stackOverflowUsersRouter_1 = __importDefault(require("./routes/stackOverflowUsersRouter"));
const questionsRoutes_1 = __importDefault(require("./routes/questionsRoutes"));
const answerRoutes_1 = __importDefault(require("./routes/answerRoutes"));
const commentsRoutes_1 = __importDefault(require("./routes/commentsRoutes"));
const votesRoutes_1 = __importDefault(require("./routes/votesRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, express_1.json)());
app.get('/', (req, res) => {
    return res.status(200).send("hollaholla");
});
app.use('/users', stackOverflowUsersRouter_1.default);
app.use('/questions', questionsRoutes_1.default);
app.use('/answers', answerRoutes_1.default);
app.use('/comments', commentsRoutes_1.default);
app.use('/votes', votesRoutes_1.default);
exports.default = app;
