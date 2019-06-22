import { Restaurant } from './Restaurant';
import { MenuItem } from '../Products/MenuItem';

export abstract class AbstractRestaurant implements Restaurant {
    public abstract readonly cuisine: string;
    public abstract readonly currency: string;
    public abstract readonly name: string;

    public abstract getBreakfastMenu(): MenuItem[];
    public abstract getLunchMenu(): MenuItem[];
    public abstract getDinnerMenu(): MenuItem[];
    public abstract getDrinks(): MenuItem[];
}
