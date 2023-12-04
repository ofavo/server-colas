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
exports.dbConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const environment_1 = require("../environment");
// or as an es module:
// Database Name
const dbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    // Use connect method to connect to the server
    try {
        yield mongoose_1.default.connect(environment_1.urlDB, {});
        console.log('Connected successfully to db');
    }
    catch (error) {
        console.log(error);
    }
    // the following code examples can be pasted here...
});
exports.dbConnection = dbConnection;
