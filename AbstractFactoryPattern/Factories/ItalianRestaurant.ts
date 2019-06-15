import { AbstractRestaurant } from './AbstractRestaurant';
import { AbstractMenuItem } from '../Products/AbstractMenuItem';
import { CaffeLatte } from '../Products/CaffeLatte';
import { Croissant } from '../Products/Croissant';

export class ItalianRestaurant extends AbstractRestaurant {
	public readonly currency = 'eur';
	public readonly cuisine = 'italian';

	getBreakfastMenu(): AbstractMenuItem[] {
		return [
			new CaffeLatte(2),
			new Croissant(3),
		];
	}

	getDinnerMenu(): AbstractMenuItem[] {
		return [];
	}

	getLunchMenu(): AbstractMenuItem[] {
		return [];
	}
}
