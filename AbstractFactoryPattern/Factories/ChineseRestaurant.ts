import { AbstractRestaurant } from './AbstractRestaurant';
import { IMenuItem } from '../Products/IMenuItem';
import { Youtiao } from '../Products/Youtiao';
import { TofuPudding } from '../Products/TofuPudding';

export class ChineseRestaurant extends AbstractRestaurant {
	public readonly currency = 'cny';
	public readonly cuisine = 'chinese';

	getBreakfastMenu(): IMenuItem[] {
		return [
			new Youtiao(1),
			new TofuPudding(0.5),
		];
	}

	getDinnerMenu(): IMenuItem[] {
		return [];
	}

	getLunchMenu(): IMenuItem[] {
		return [];
	}
}
