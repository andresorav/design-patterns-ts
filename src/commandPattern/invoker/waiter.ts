import { Invoker } from './invoker';
import { Command } from '../commands/command';

export class Waiter implements Invoker {
    public *placeOrder(orderNumber: number, order: Command): Generator<string> {
        yield `~ Waiter executes order nr ${orderNumber} ~`;
        yield order.execute();
    }
}
