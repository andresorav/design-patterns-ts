import { Command } from '../commands/command';

export interface Receiver {
    prepareMeal(order: Command): string;
}
