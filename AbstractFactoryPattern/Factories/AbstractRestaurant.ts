import { IRestaurant } from './IRestaurant';
import { IMenuItem } from '../Products/IMenuItem';

export abstract class AbstractRestaurant implements IRestaurant {
	abstract readonly currency: string;
	abstract readonly cuisine: string;
	public readonly name: string;

	constructor(name: string) {
		this.name = name;
	}

	abstract getBreakfastMenu(): IMenuItem[];
	abstract getLunchMenu(): IMenuItem[];
	abstract getDinnerMenu(): IMenuItem[];
	abstract getDrinks(): IMenuItem[];
}
