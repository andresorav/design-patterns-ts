import { Waiter } from './invoker/waiter';
import { Cook } from './receiver/cook';
import { Order } from './commands/order';
import { printBlue, printYellow } from '../beautifulPrint';
import { Invoker } from './invoker/invoker';
import { Command } from './commands/command';

const placeOrders = (waiter: Invoker, orders: Command[]): string[] => {
    return orders.reduce((orders, order, index): string[] => {
        for(let result of waiter.placeOrder( index + 1, order)) {
            orders.push(result);
        }
        return orders;
    }, []);
};

const patternExample = (): void => {
    printBlue('Command Pattern');

    const cook = new Cook();
    const waiter = new Waiter();

    const orders = [
        new Order(cook, 'Roman Salad, Tomato Basil Soup'),
        new Order(cook, 'Spaghetti Bolognese'),
        new Order(cook, 'Spinach Soup, Lasagna')
    ];

    const results = placeOrders(waiter, orders);

    printYellow(results);

};

if (require.main === module) {
    patternExample();
}

export {
    patternExample,
}
