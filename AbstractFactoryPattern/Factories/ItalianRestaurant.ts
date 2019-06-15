import { AbstractRestaurant } from './AbstractRestaurant';
import { AbstractMenuItem } from '../Products/AbstractMenuItem';
import { Caffe } from '../Products/Caffe';
import { Croissant } from '../Products/Croissant';
import { IMenuItem } from '../Products/IMenuItem';
import { Sandwich } from '../Products/Sandwich';
import { Pasta } from '../Products/Pasta';
import { Soup } from '../Products/Soup';
import { Pizza } from '../Products/Pizza';
import { Risotto } from '../Products/Risotto';
import { MainCourse } from '../Products/MainCourse';

export class ItalianRestaurant extends AbstractRestaurant {
	public readonly cuisine = 'italian';
	public readonly currency = 'eur';
	public readonly name = 'Un delizioso viaggio';

	public getBreakfastMenu(): AbstractMenuItem[] {
		return [
			new Croissant('Whole wheat croissant', 1.0),
			new Sandwich('Mozzarella, basil and ham panini', 2.0),
			new Sandwich('Mozzarella and tomato panini', 2.0),
		];
	}

	public getLunchMenu(): AbstractMenuItem[] {
		return [
			new Pasta('Pasta carbonara', 7.00),
			new Pasta('Mushroom lasagne', 7.00),
			new Soup('Walnut soup', 5.00),
			new Soup('Minestrone', 5.00),
			new Pizza('Calzone', 7.00),
			new Pizza('Ai frutti di mare ', 9.00),
			new Risotto('Risotto alla milanese', 8.00),
		];
	}

	public getDinnerMenu(): AbstractMenuItem[] {
		return [
			...this.getLunchMenu(),
			new MainCourse('Tuscan tomato bread soup with steamed mussels', 12.00),
			new MainCourse('Grilled fish with artichoke caponata', 12.00),
			new MainCourse('Swordfish', 15.00),
			new MainCourse('Meatballs in caper-tomato souce', 9.00),
		];
	}

	public getDrinks(): IMenuItem[] {
		return [
			new Caffe('Caffe latte', 2.5),
			new Caffe('Cappuccino', 3.0),
			new Caffe('Espresso', 2.0),
		];
	}
}
