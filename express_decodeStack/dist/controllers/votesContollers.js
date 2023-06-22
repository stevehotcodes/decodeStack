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
exports.downVote = exports.addVote = void 0;
const DatabaseHelper_1 = __importDefault(require("../helpers/DatabaseHelper"));
const db = DatabaseHelper_1.default.getInstance();
const addVote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { answerID } = req.params;
        const userID = (_a = req.info) === null || _a === void 0 ? void 0 : _a.id;
        let voted = '1';
        //fetch vote details
        const voteDetails = yield (yield db.exec('getVoteByAnswerId', { answerID })).recordset[0];
        let voteID = voteDetails.id;
        //check if the vote exists
        if (!voteID) {
            return res.status(404).json({ message: "Can't vote" });
        }
        //check if the vote status is voted 
        if (voteDetails.isUpvoted == voted) {
            return res.status(500).json({ message: "Already voted" });
        }
        yield db.exec('addVote', { answerID, userID, id: voteID });
        return res.status(201).json({ message: "voted successfully" });
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.addVote = addVote;
const downVote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const { answerID } = req.params;
        const userID = (_b = req.info) === null || _b === void 0 ? void 0 : _b.id;
        let voted = '1';
        //fetch vote Details
        const voteDetails = yield (yield db.exec('getVoteByAnswerId', { answerID })).recordset[0];
        let voteID = voteDetails.id;
        if (!voteID) {
            return res.status(404).json({ message: "Can't vote" });
        }
        //check if the vote status is voted 
        if (voteDetails.isUpvoted == voted) {
            //revert the upvote
            yield db.exec('downVote', { answerID, userID, id: voteID });
            return res.status(200).json({ message: 'the answer has been downvoted' });
        }
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.downVote = downVote;
