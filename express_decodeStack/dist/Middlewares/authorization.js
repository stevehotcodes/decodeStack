"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminPrivileges = exports.accessRequired = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function verifyToken(req, res, rights = false) {
    try {
        const token = req.headers['token'];
        // let message ='Unauthorized'
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const decodedData = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        req.info = decodedData;
        if (rights && decodedData.role !== rights) {
            return res.status(401).json({ warning: "No you are not allowed do this operation" });
        }
    }
    catch (error) {
        return res.status(403).json({ message: error.message });
    }
}
const accessRequired = (req, res, next) => {
    const error = verifyToken(req, res);
    if (error) {
        return error;
    }
    next();
};
exports.accessRequired = accessRequired;
const adminPrivileges = (req, res, next) => {
    const error = verifyToken(req, res, 'admin');
    if (error) {
        return error;
    }
    next();
};
exports.adminPrivileges = adminPrivileges;
