import { AbstractRestaurant } from './AbstractRestaurant';
import { IMenuItem } from '../Products/IMenuItem';
import { Youtiao } from '../Products/Youtiao';
import { TofuPudding } from '../Products/TofuPudding';
import { Noodles } from '../Products/Noodles';
import { Dumplings } from '../Products/Dumplings';

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
		return [
			new Noodles(1),
			new Dumplings(1.5),
		];
	}

	getLunchMenu(): IMenuItem[] {
		return [];
	}
}
