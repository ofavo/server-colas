import Server from "./class/server";
import { router } from "./routes/router";
import bodyParser from "body-parser";
import cors from "cors";

const server = Server.instance;

// BodyParser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// CORS
server.app.use(cors({ origin: true, credentials: true, methods: ['GET', 'POST'], allowedHeaders: ['Content-Type', 'Authorization'] }));

// Routes
server.app.use('/', router)

server.start(() => {
    console.log(`Server running on port ${server.port}`);
});