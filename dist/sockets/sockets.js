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
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = exports.disconnect = void 0;
const tickes_1 = require("../controllers/tickes");
const disconnect = (client) => {
    client.on('disconnect', () => {
        console.log('Client disconnected');
    });
};
exports.disconnect = disconnect;
const message = (client, io) => {
    client.on('sendToCola', (payload) => __awaiter(void 0, void 0, void 0, function* () {
        const num = yield (0, tickes_1.getTicketsTwo)();
        const num2 = yield (0, tickes_1.getTicketsThree)();
        let calculo = num * 2;
        let calculo2 = num2 * 3;
        if (calculo < calculo2 || calculo === calculo2) {
            const ticket = yield (0, tickes_1.createTicket)(payload.name, payload.id, 2);
            let id = ticket._id.toString();
            io.emit('sendToCola1', Object.assign({ type: 'add', idBd: id }, payload));
            yield deleteTicketBd(id, 2, io, 'sendToCola1');
        }
        else if (calculo > calculo2) {
            const ticket = yield (0, tickes_1.createTicket)(payload.name, payload.id, 3);
            let id = ticket._id.toString();
            io.emit('sendToCola2', Object.assign({ type: 'add', idBd: id }, payload));
            yield deleteTicketBd(id, 3, io, 'sendToCola2');
        }
    }));
};
exports.message = message;
const deleteTicketBd = (id, time, io, event) => __awaiter(void 0, void 0, void 0, function* () {
    setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
        const ticket = yield (0, tickes_1.deleteTicket)(id);
        io.emit(event, { type: 'delete', idBd: id });
        return ticket;
    }), time * 10000);
});
