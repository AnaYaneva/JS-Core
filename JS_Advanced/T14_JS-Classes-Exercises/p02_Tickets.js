function ticketSystem(array, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];
    for (let ticketInfo of array) {
        let ticketTokens = ticketInfo.split('|');

        let destination = ticketTokens[0];
        let price = Number(ticketTokens[1]);
        let status = ticketTokens[2];

        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

    switch (criteria) {
        case "destination":
            return tickets.sort((t1, t2) => {
                if (t1.destination < t2.destination)
                    return -1;
                if (t1.destination >t2.destination)
                    return 1;
                return 0;
            });
            break;
        case "price":
            return tickets.sort((t1, t2) => t1.price - t2.price);
            break;
        case "status":
            return tickets.sort((t1, t2) => {
                if (t1.status < t2.status)
                    return -1;
                if (t1.status > t2.status)
                    return 1;
                return 0;
            });
            break;
    }


    // switch (sortingCriteria) {
    //     case 'price':
    //         tickets.sort((a, b) => a.price - b.price);
    //         break;
    //     case 'destination':
    //         tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    //         break;
    //     case 'status':
    //         tickets.sort((a, b) => a.status.localeCompare(b.status));
    //         break;
    // }
}

console.log(ticketSystem(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));