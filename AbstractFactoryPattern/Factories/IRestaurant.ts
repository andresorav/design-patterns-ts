import { IMenuItem } from '../Products/IMenuItem';

export interface IRestaurant {
	readonly cuisine: string;
	readonly currency: string;
	readonly name: string;

	getBreakfastMenu(): IMenuItem[];
	getLunchMenu(): IMenuItem[];
	getDinnerMenu(): IMenuItem[];
	getDrinks(): IMenuItem[];
}
