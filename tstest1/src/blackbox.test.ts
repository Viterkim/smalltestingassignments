import { NORMAL_TICKET_PRICE, SAVER_TICKET_PRICE, trainTicketPrice } from './blackbox';

describe('trainTicketPrice', () => {
    
    test('Ticket before 9:30 is full price', () => {
        expect(trainTicketPrice(5)).toBe(NORMAL_TICKET_PRICE);
    });

    test('Ticket at 9:30 is half price', () => {
        expect(trainTicketPrice(9.5)).toBe(SAVER_TICKET_PRICE);
    });

    test('Ticket after 9:30 is half price', () => {
        expect(trainTicketPrice(9.51)).toBe(SAVER_TICKET_PRICE);
    });

    test('Ticket before 16 is half price', () => {
        expect(trainTicketPrice(15.99)).toBe(SAVER_TICKET_PRICE);
    });

    test('Ticket at 16 is half price', () => {
        expect(trainTicketPrice(16)).toBe(SAVER_TICKET_PRICE);
    });

    test('Ticket at 19:30 is full price', () => {
        expect(trainTicketPrice(19.5)).toBe(NORMAL_TICKET_PRICE);
    });

    test('Ticket after 19:30 is half price', () => {
        expect(trainTicketPrice(19.50001)).toBe(SAVER_TICKET_PRICE);
    });

})
