"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnswer = exports.addAnswer = void 0;
const DatabaseHelper_1 = __importDefault(require("../helpers/DatabaseHelper"));
const uuid_1 = require("uuid");
const Validators_1 = require("../helpers/Validators");
const db = DatabaseHelper_1.default.getInstance();
const addAnswer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (0, uuid_1.v4)();
        const voteID = (0, uuid_1.v4)();
        let userID = (_a = req.info) === null || _a === void 0 ? void 0 : _a.id;
        const { questionID } = req.params;
        const { answerDescription } = req.body;
        const { error } = Validators_1.answersInputValidators.validate(req.body);
        if (error) {
            return res.status(406).json({ error: error.details[0].message });
        }
        yield db.exec('addAnswer', { id, userID, answerDescription, questionID, voteID });
        return res.status(201).json({ message: 'answer added to the database' });
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.addAnswer = addAnswer;
const getAnswer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { questionID } = req.params;
        const answer = (yield db.exec('getAllAnswers', { questionID })).recordset;
        res.status(200).json(answer);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.getAnswer = getAnswer;
