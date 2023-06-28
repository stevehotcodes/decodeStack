"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentInputValidators = exports.answersInputValidators = exports.signInValidator = exports.questionInputValidators = exports.registrationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.registrationSchema = joi_1.default.object({
    firstName: joi_1.default.string().required().min(3),
    lastName: joi_1.default.string().required().min(3),
    userName: joi_1.default.string().required().min(3),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().pattern(new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$`)),
    github: joi_1.default.string().required().min(3)
});
exports.questionInputValidators = joi_1.default.object({
    questionTitle: joi_1.default.string().required(),
    questionDescription: joi_1.default.string().required(),
    questionTag: joi_1.default.string().required()
});
exports.signInValidator = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().pattern(new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$`))
});
exports.answersInputValidators = joi_1.default.object({
    answerDescription: joi_1.default.string().required().min(3)
});
exports.commentInputValidators = joi_1.default.object({
    commentDescription: joi_1.default.string().required().min(1)
});
