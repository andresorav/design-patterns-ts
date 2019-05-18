import { AbstractRestaurant } from './AbstractRestaurant';
import { IMenuItem } from '../Products/IMenuItem';
import { Youtiao } from '../Products/Youtiao';

export class ChineseRestaurant extends AbstractRestaurant {
	public readonly currency = 'cny';

	getBreakfastMenu(): IMenuItem[] {
		return [
			new Youtiao(1),
		];
	}

	getDinnerMenu(): IMenuItem[] {
		return [];
	}

	getLunchMenu(): IMenuItem[] {
		return [];
	}
}