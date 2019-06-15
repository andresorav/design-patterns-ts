import { AbstractRestaurant } from './AbstractRestaurant';
import { AbstractMenuItem } from '../Products/AbstractMenuItem';
import { Caffe } from '../Products/Caffe';
import { Croissant } from '../Products/Croissant';

export class ItalianRestaurant extends AbstractRestaurant {
	public readonly currency = 'eur';
	public readonly cuisine = 'italian';

	getBreakfastMenu(): AbstractMenuItem[] {
		return [
			new Caffe('Caffe latte', 3.0),
			new Croissant('Croissant', 1.0),
		];
	}

	getDinnerMenu(): AbstractMenuItem[] {
		return [];
	}

	getLunchMenu(): AbstractMenuItem[] {
		return [];
	}
}
