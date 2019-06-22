import { MenuItem } from '../Products/MenuItem';

export interface Restaurant {
    readonly cuisine: string;
    readonly currency: string;
    readonly name: string;

    getBreakfastMenu(): MenuItem[];
    getLunchMenu(): MenuItem[];
    getDinnerMenu(): MenuItem[];
    getDrinks(): MenuItem[];
}
