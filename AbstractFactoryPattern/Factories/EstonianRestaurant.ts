import { AbstractRestaurant } from './AbstractRestaurant';
import { IMenuItem } from '../Products/IMenuItem';
import { Porridge } from '../Products/Porridge';

export class EstonianRestaurant extends AbstractRestaurant {
	readonly name = 'Estonian restaurant';
	readonly currency = 'eur';

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