import  Ticket from "../class/ticke";

export const createTicket = async (name: string, id: number, cola: number) => {
    const ticket = new Ticket({ name, id, cola });
    await ticket.save();
    return ticket;
};

export const getTicketsTwo = async () => {
    const tickets = await Ticket.find({cola:2}).count();
    return tickets;
};

export const getTicketsThree = async () => {
    const tickets = await Ticket.find({cola:3}).count();
    return tickets;
};

export const deleteTicket = async (id: string) => {
    const ticket = await Ticket.findByIdAndDelete(id);
    return ticket;
}