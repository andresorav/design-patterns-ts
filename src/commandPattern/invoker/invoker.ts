import { Command } from '../commands/command';

export interface Invoker {
    placeOrder(orderNumber: number, order: Command): Generator<string>;
}
