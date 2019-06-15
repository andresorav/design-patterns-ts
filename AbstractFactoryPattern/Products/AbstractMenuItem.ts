import { IMenuItem } from './IMenuItem';

export abstract class AbstractMenuItem implements IMenuItem {
	abstract readonly type: string;
	public readonly name: string;
	public readonly price: number;

	constructor(name: string, price: number) {
		this.name = name;
		this.price = price;
	}
}
