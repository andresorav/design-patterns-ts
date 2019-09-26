import { Command } from './command';
import { Receiver } from '../receiver/receiver';

export class Order implements Command {
    private readonly cook: Receiver;
    private readonly menu: string;

    public constructor(cook: Receiver, menu: string) {
        this.cook = cook;
        this.menu = menu;
    }

    public execute(): string {
        return this.cook.prepareMeal(this);
    }

    public getMenu(): string {
        return this.menu;
    }
}