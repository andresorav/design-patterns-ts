import { AbstractRestaurant } from './AbstractRestaurant';
import { IMenuItem } from '../Products/IMenuItem';
import { Youtiao } from '../Products/Youtiao';
import { Pudding } from '../Products/Pudding';
import { Noodles } from '../Products/Noodles';
import { Dumplings } from '../Products/Dumplings';
import { Soup } from '../Products/Soup';
import { MainCourse } from '../Products/MainCourse';
import { Tea } from '../Products/Tea';

export class ChineseRestaurant extends AbstractRestaurant {
	public readonly cuisine = 'chinese';
	public readonly currency = 'cny';
	public readonly name = 'Měiwèi de lǚchéng';

	public getBreakfastMenu(): IMenuItem[] {
		return [
			new Youtiao('Yóutiáo with soy milk', 1),
			new Pudding('Tofu pudding', 0.5),
		];
	}

	public getLunchMenu(): IMenuItem[] {
		return [
			new Noodles('Beef noodles', 1),
			new Noodles('Lanzhou', 1),
			new Dumplings('Mushroom dumplings', 1.5),
			new Dumplings('Beef dumplings', 1.5),
			new Soup('Chicken soup', 0.5),
			new Soup('Black sesame soup', 0.5),
			new Pudding('Coconut pudding', 0.5),
		];
	}

	public getDinnerMenu(): IMenuItem[] {
		return [
			...this.getLunchMenu(),
			new MainCourse('Sweet and sour chicken with noodles', 2.5),
			new MainCourse('Beef chow fun', 2.5),
			new MainCourse('Kung pao chicken with rice', 3.0),
		]
	}

	public getDrinks(): IMenuItem[] {
		return [
			new Tea('Red tea', 1.0),
			new Tea('Black tea', 1.0),
			new Tea('Green tea', 1.0),
		];
	}
}
