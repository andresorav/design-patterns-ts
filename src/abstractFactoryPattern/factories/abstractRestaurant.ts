import { MenuItem } from '../products/abstractMenuItem';

export interface Restaurant {
    readonly cuisine: string;
    readonly currency: string;
    readonly name: string;

    getBreakfastMenu(): MenuItem[];
    getLunchMenu(): MenuItem[];
    getDinnerMenu(): MenuItem[];
    getDrinks(): MenuItem[];
}

export abstract class AbstractRestaurant implements Restaurant {
    public abstract readonly cuisine: string;
    public abstract readonly currency: string;
    public abstract readonly name: string;

    public abstract getBreakfastMenu(): MenuItem[];
    public abstract getLunchMenu(): MenuItem[];
    public abstract getDinnerMenu(): MenuItem[];
    public abstract getDrinks(): MenuItem[];
}
