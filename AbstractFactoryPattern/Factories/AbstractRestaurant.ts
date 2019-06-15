import { IRestaurant } from './IRestaurant';
import { IMenuItem } from '../Products/IMenuItem';

export abstract class AbstractRestaurant implements IRestaurant {
	public abstract readonly cuisine: string;
	public abstract readonly currency: string;
	public abstract readonly name: string;

	public abstract getBreakfastMenu(): IMenuItem[];
	public abstract getLunchMenu(): IMenuItem[];
	public abstract getDinnerMenu(): IMenuItem[];
	public abstract getDrinks(): IMenuItem[];
}
