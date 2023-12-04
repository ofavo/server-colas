"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ticketSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    id: {
        type: Number,
        required: [true, 'Id is required']
    },
    cola: {
        type: Number,
        required: [true, 'Cola is required']
    },
});
exports.default = (0, mongoose_1.model)("Ticket", ticketSchema);
