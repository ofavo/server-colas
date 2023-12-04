import { Socket } from "socket.io";
import { getTicketsTwo, getTicketsThree, createTicket, deleteTicket } from "../controllers/tickes";


export const disconnect = (client: Socket) => {

    client.on('disconnect', () => {
        console.log('Client disconnected');
    });
};

export const message = (client: Socket, io: any) => {

    client.on('sendToCola', async (payload: { id: number, name: string }) => {
     
       
        const num  = await getTicketsTwo();
        const num2  = await getTicketsThree();

        let calculo = num * 2;
        let calculo2 = num2 * 3;
    
        if(calculo < calculo2 || calculo === calculo2){
            const ticket = await createTicket(payload.name, payload.id, 2);
            let id = ticket._id.toString();
    
            io.emit('sendToCola1', {type: 'add',idBd:id, ...payload});
            await deleteTicketBd(id, 2, io, 'sendToCola1');
        }else if(calculo > calculo2){
            const ticket = await createTicket(payload.name, payload.id, 3);
            let id = ticket._id.toString();
            io.emit('sendToCola2', {type: 'add',idBd:id, ...payload});
            await deleteTicketBd(id, 3, io, 'sendToCola2');
        }
     
        
    });
}

const deleteTicketBd = async (id: string, time: number, io: any, event: string) => {
    setTimeout(async () => {
    const ticket = await deleteTicket(id);
    io.emit(event, {type: 'delete',idBd:id});
    return ticket;
    }, time*10000);
};


