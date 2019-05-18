import { IMenuItem } from '../Products/IMenuItem';

export interface IRestaurant {
	readonly name: string,
	readonly currency: string,

	getBreakfastMenu(): IMenuItem[],
	getLunchMenu(): IMenuItem[],
	getDinnerMenu(): IMenuItem[],
}