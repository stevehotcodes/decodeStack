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
exports.downVote = exports.upVote = void 0;
const uuid_1 = require("uuid");
const DatabaseHelper_1 = __importDefault(require("../helpers/DatabaseHelper"));
const db = DatabaseHelper_1.default.getInstance();
const upVote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { answerID } = req.params;
        const userID = (_a = req.info) === null || _a === void 0 ? void 0 : _a.id;
        let voted = '1';
        //fetch vote details
        const voteDetails = yield (yield db.exec('getVoteByAnswerId', { answerID, userID })).recordset[0];
        let voteID = voteDetails === null || voteDetails === void 0 ? void 0 : voteDetails.id;
        //check if the vote exists
        if ((voteDetails === null || voteDetails === void 0 ? void 0 : voteDetails.isUpvoted) == '0') {
            // delete downvote before upvote
            yield db.exec('removeVote', { id: voteID });
        }
        //check if the vote status is voted 
        if ((voteDetails === null || voteDetails === void 0 ? void 0 : voteDetails.isUpvoted) == voted) {
            return res.status(409).json({ message: "Already voted" });
        }
        yield db.exec('upVote', { answerID, userID, id: (0, uuid_1.v4)() });
        return res.status(201).json({ message: "voted successfully" });
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.upVote = upVote;
const downVote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const { answerID } = req.params;
        const userID = (_b = req.info) === null || _b === void 0 ? void 0 : _b.id;
        let voted = '0';
        //fetch vote Details
        const voteDetails = yield (yield db.exec('getVoteByAnswerId', { answerID, userID })).recordset[0];
        let voteID = voteDetails === null || voteDetails === void 0 ? void 0 : voteDetails.id;
        if ((voteDetails === null || voteDetails === void 0 ? void 0 : voteDetails.isUpvoted) == '0') {
            return res.status(409).json({ message: "Can't vote" });
        }
        //check if the vote status is voted 
        if ((voteDetails === null || voteDetails === void 0 ? void 0 : voteDetails.isUpvoted) == '1') {
            //revert the upvote
            yield db.exec('removeVote', { id: voteID });
        }
        yield db.exec('downVote', { answerID, userID, id: (0, uuid_1.v4)() });
        return res.status(200).json({ message: 'the answer has been downvoted' });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.downVote = downVote;
