import { IMenuItem } from './IMenuItem';

export abstract class AbstractMenuItem implements IMenuItem {
	abstract readonly name: string;
	public readonly price: number;

	constructor(price: number) {
		this.price = price;
	}
}