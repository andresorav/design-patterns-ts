import { MenuItem } from './MenuItem';

export abstract class AbstractMenuItem implements MenuItem {
    abstract readonly type: string;
    public readonly name: string;
    public readonly price: number;

    public constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}
