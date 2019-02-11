export const NORMAL_TICKET_PRICE = 10;
export const SAVER_TICKET_PRICE = 5;

export function trainTicketPrice(time: number) {
    if (time < 9.5 || time > 16 && time <= 19.5) {
        return NORMAL_TICKET_PRICE;
    }
    return SAVER_TICKET_PRICE;
}
