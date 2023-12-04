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
exports.deleteTicket = exports.getTicketsThree = exports.getTicketsTwo = exports.createTicket = void 0;
const ticke_1 = __importDefault(require("../class/ticke"));
const createTicket = (name, id, cola) => __awaiter(void 0, void 0, void 0, function* () {
    const ticket = new ticke_1.default({ name, id, cola });
    yield ticket.save();
    return ticket;
});
exports.createTicket = createTicket;
const getTicketsTwo = () => __awaiter(void 0, void 0, void 0, function* () {
    const tickets = yield ticke_1.default.find({ cola: 2 }).count();
    return tickets;
});
exports.getTicketsTwo = getTicketsTwo;
const getTicketsThree = () => __awaiter(void 0, void 0, void 0, function* () {
    const tickets = yield ticke_1.default.find({ cola: 3 }).count();
    return tickets;
});
exports.getTicketsThree = getTicketsThree;
const deleteTicket = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const ticket = yield ticke_1.default.findByIdAndDelete(id);
    return ticket;
});
exports.deleteTicket = deleteTicket;
