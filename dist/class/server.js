"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const sockets_1 = require("../sockets/sockets");
const db_1 = require("../db/db");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = Number(process.env.PORT) || 3000;
        this.httpServer = new http_1.default.Server(this.app);
        this.io = (0, socket_io_1.default)(this.httpServer, { cors: { origin: true, credentials: true, methods: ['GET', 'POST'], allowedHeaders: ['Content-Type', 'Authorization'] } });
        (0, db_1.dbConnection)();
        this.listenSockets();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    listenSockets() {
        console.log('Listening connections - sockets');
        this.io.on('connection', client => {
            console.log('Client connected');
            (0, sockets_1.message)(client, this.io);
            (0, sockets_1.disconnect)(client);
        });
    }
    start(callback) {
        this.httpServer.listen(this.port, callback);
    }
}
exports.default = Server;
