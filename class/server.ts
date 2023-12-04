import express from 'express';
import  SocketIO  from 'socket.io';
import http from 'http';
import { disconnect, message } from '../sockets/sockets';
import { dbConnection } from '../db/db';
export default class Server {
  public app: express.Application;
  public port: number;
  private static _instance: Server;

  public io : SocketIO.Server;
  private httpServer: http.Server;

  private constructor() {
    this.app = express();
    this.port = Number(process.env.PORT) || 3000;
    this.httpServer = new http.Server(this.app);
    this.io = SocketIO(this.httpServer, { cors: { origin: true, credentials: true, methods: ['GET', 'POST'], allowedHeaders: ['Content-Type', 'Authorization'] } });
    dbConnection();
    this.listenSockets();
  }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }
  private listenSockets() {

    console.log('Listening connections - sockets');

    this.io.on('connection', client => {
      console.log('Client connected');
      message(client, this.io);
        disconnect(client);
      
    });
  }

  start(callback: () => void) {

    this.httpServer.listen(this.port, callback);
  
  }
}