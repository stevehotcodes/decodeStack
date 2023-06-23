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
exports.getAQuestionByUser = exports.deleteAQuestion = exports.getAllQuestions = exports.getAQuestion = exports.addQuestion = void 0;
const uuid_1 = require("uuid");
const mssql_1 = __importDefault(require("mssql"));
const config_1 = require("../config");
const DatabaseHelper_1 = __importDefault(require("../helpers/DatabaseHelper"));
const db = DatabaseHelper_1.default.getInstance();
const addQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (0, uuid_1.v4)();
        const tagId = (0, uuid_1.v4)();
        //user must be signed in
        const userID = (_a = req.info) === null || _a === void 0 ? void 0 : _a.id;
        const { questionTitle, questionDescription, questionTag } = req.body;
        // await db.exec('addQuestion',{id,questionTitle,questionDescription,questionTag,userID,tagId});
        // await db.exec('addTag',{tagId,questionTag,tagTitle});
        const pool = yield mssql_1.default.connect(config_1.sqlConfig);
        pool.request()
            .input('id', mssql_1.default.VarChar, id)
            .input('questionTitle', mssql_1.default.VarChar, questionTitle)
            .input('questionDescription', mssql_1.default.VarChar, questionDescription)
            .input('questionTag', mssql_1.default.VarChar, questionTag)
            .input('userID', mssql_1.default.VarChar, userID)
            .input('tagID', mssql_1.default.VarChar, tagId)
            .execute('addQuestion');
        return res.status(200).json({ message: "question added successfully" });
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
});
exports.addQuestion = addQuestion;
const getAQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const question = (yield db.exec('getAQuestionById', { id })).recordset[0];
        return res.status(200).json(question);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.getAQuestion = getAQuestion;
const getAllQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = (yield db.exec('getAllQuestions')).recordset;
        res.status(200).json({ questions });
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
});
exports.getAllQuestions = getAllQuestions;
const deleteAQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { questionID } = req.params;
        yield db.exec('deleteQuestion', { id: questionID });
        res.status(201).json({ message: 'message deleted successfully' });
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.deleteAQuestion = deleteAQuestion;
const getAQuestionByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const userID = (_b = req.info) === null || _b === void 0 ? void 0 : _b.id; ///user must sign in or log in
        const question = (yield db.exec('getAQuestionByUserId', { userID })).recordset;
        res.status(200).json({ question });
    }
    catch (error) {
        res.status(404).json(error.message);
    }
});
exports.getAQuestionByUser = getAQuestionByUser;
