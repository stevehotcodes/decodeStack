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
const mssql_1 = __importDefault(require("mssql"));
const config_1 = require("../config");
class DatabaseHelper {
    //instantiating database connection
    constructor() {
        this.pool = mssql_1.default.connect(config_1.sqlConfig);
    }
    // creating the database instance
    static getInstance() {
        if (!DatabaseHelper.instance) {
            DatabaseHelper.instance = new DatabaseHelper();
        }
        return DatabaseHelper.instance;
    }
    //methods to interact with the database
    static inputsRequest(request, data = {}) {
        const keys = Object.keys(data);
        keys.map(keyName => {
            return request.input(keyName, data[keyName]);
        });
        return request;
    }
    //execute stored procedure
    exec(storedProcedure, data = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = yield (yield this.pool).request();
            request = DatabaseHelper.inputsRequest(request, data);
            return yield request.execute(storedProcedure);
        });
    }
    //execute query
    query(queryString) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.pool).request().query(queryString);
        });
    }
}
exports.default = DatabaseHelper;
