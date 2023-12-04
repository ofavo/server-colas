
import { model, Schema, Document } from "mongoose";

export interface  Ticket extends Document {
     name: string;
     id: number;
     cola: number;


}

const ticketSchema = new Schema({
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
export default model<Ticket>("Ticket", ticketSchema);