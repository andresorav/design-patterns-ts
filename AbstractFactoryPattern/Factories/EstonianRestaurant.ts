import { AbstractRestaurant } from './AbstractRestaurant';
import { IMenuItem } from '../Products/IMenuItem';
import { Porridge } from '../Products/Porridge';

export class EstonianRestaurant extends AbstractRestaurant {
	public readonly currency = 'eur';
	public readonly cuisine = 'estonian';

	getBreakfastMenu(): IMenuItem[] {
		return [
			new Porridge(2),
		];
	}

	getDinnerMenu(): IMenuItem[] {
		return [];
	}

	getLunchMenu(): IMenuItem[] {
		return [];
	}
}
