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
exports.signIn = exports.getSignedInUser = exports.getOneUser = exports.updateUser = exports.deleteUser = exports.getAllUsers = exports.addUser = void 0;
const uuid_1 = require("uuid");
const bcrypt_1 = __importDefault(require("bcrypt"));
const mssql_1 = __importDefault(require("mssql"));
const config_1 = require("../config");
const DatabaseHelper_1 = __importDefault(require("../helpers/DatabaseHelper"));
const Validators_1 = require("../helpers/Validators");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
const db = DatabaseHelper_1.default.getInstance();
function filterUserInfo(users) {
    users.forEach((users) => {
        delete users.password;
        delete users.isDeleted;
    });
}
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = (0, uuid_1.v4)();
        let { firstName, lastName, userName, email, password, github } = req.body;
        //validate first
        const { error } = Validators_1.registrationSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        // console.log(hashedPassword)
        const pool = yield mssql_1.default.connect(config_1.sqlConfig);
        yield pool.request()
            .input('id', mssql_1.default.VarChar, id)
            .input('firstName', mssql_1.default.VarChar, firstName)
            .input('lastName', mssql_1.default.VarChar, lastName)
            .input('userName', mssql_1.default.VarChar, userName)
            .input('email', mssql_1.default.VarChar, email)
            .input('password', mssql_1.default.VarChar, hashedPassword)
            .input('github', mssql_1.default.VarChar, github)
            .execute('addUser');
        // await db.exec('addStackOverflowUser',{id,firstName,lastName,userName,email,hashedPassword})
        return res.status(201).json({ message: `user${firstName} has been created successfully` });
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
});
exports.addUser = addUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = DatabaseHelper_1.default.getInstance();
    try {
        let users = (yield db.exec('getAllStackOverflowUsers')).recordset;
        filterUserInfo(users);
        return res.status(200).json(users);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
});
exports.getAllUsers = getAllUsers;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { recordset } = yield db.exec('getStackOverUserBy', { id });
        filterUserInfo(recordset);
        if (!recordset[0]) {
            res.status(404).json({ message: "user does not exist" });
        }
        else {
            yield db.exec('deleteStackOverflowUser', { id });
            res.status(200).json({ message: "user deleted" });
        }
    }
    catch (error) {
        res.json(error.message);
    }
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const id = (_a = req.info) === null || _a === void 0 ? void 0 : _a.id;
        const { userName, email } = req.body;
        const result = (yield db.exec('getStackOverUserBy', { id })).recordset[0];
        if (!result) {
            return res.status(404).json({ message: "user not found" });
        }
        else {
            yield db.exec('updateStackOverflowUser', { id, userName, email });
            return res.status(200).json({ message: "user updated successfully" });
        }
    }
    catch (error) {
        return res.json(error.message);
    }
});
exports.updateUser = updateUser;
const getOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = (yield db.exec('getStackOverUserById', { id })).recordset[0];
        if (!user) {
            return res.status(404).json({ message: 'user does not exist' });
        }
        return res.status(200).json(user);
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.getOneUser = getOneUser;
const getSignedInUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const id = (_b = req.info) === null || _b === void 0 ? void 0 : _b.id;
        const user = (yield db.exec('getStackOverUserById', { id })).recordset[0];
        if (!user) {
            return res.status(404).json({ message: 'user does not exist' });
        }
        return res.status(200).json(user);
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.getSignedInUser = getSignedInUser;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = (yield db.exec('getUserBy', { filter_type: 'email', filter_value: email })).recordset[0];
        if (!user) {
            return res.status(404).json({ message: 'user not found' });
        }
        const validPassword = yield bcrypt_1.default.compare(password, user.password);
        if (!validPassword) {
            return res.status(404).json({ message: `invalid credentials for <${email}>` });
        }
        ;
        //generate token 
        const name = user.firstName + ' ' + user.lastName;
        const payload = { id: user.id, role: user.role, name, email: user.email };
        const token = jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY, { expiresIn: '63600s' });
        // await db.query('UPDATE stackOverflowUsers SET isActive=1')
        return res.status(200).json({ message: 'Signin successful', email, token });
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
exports.signIn = signIn;
