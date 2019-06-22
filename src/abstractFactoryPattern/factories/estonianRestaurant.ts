import { AbstractRestaurant } from './abstractRestaurant';
import { Porridge } from '../products/porridge';
import { Croissant } from '../products/croissant';
import { Caffe } from '../products/caffe';
import { Tea } from '../products/tea';
import { FriedEggs } from '../products/friedEggs';
import { Pizza } from '../products/pizza';
import { Burger } from '../products/burger';
import { Salad } from '../products/salad';
import { Pasta } from '../products/pasta';
import { MainCourse } from '../products/mainCourse';
import { MenuItem } from '../products/abstractMenuItem';

export class EstonianRestaurant extends AbstractRestaurant {
    public readonly cuisine = 'estonian';
    public readonly currency = 'eur';
    public readonly name = 'Maitsev teekond';

    public getDrinks(): MenuItem[] {
        return [
            new Caffe('Caffe latte', 2.0),
            new Caffe('Cappuccino', 3.0),
            new Tea('Black tea', 1.0),
            new Tea('Green tea', 1.0),
        ];
    }

    public getBreakfastMenu(): MenuItem[] {
        return [
            new Porridge('Oatmeal porridge with raspberries', 2),
            new Porridge('Rice porridge', 2),
            new Croissant('Croissant with cheese', 1.0),
            new FriedEggs('Fried eggs with bacon', 2.5),
        ];
    }

    public getLunchMenu(): MenuItem[] {
        return [
            new Pizza('Ham pizza', 5.0),
            new Pizza('Three cheese pizza', 5.0),
            new Burger('Angus beef burger with fries', 7.0),
            new Salad('Chicken salad', 5.0),
            new Salad('Fresh salad', 3.0),
            new Pasta('Salmon pasta', 5.0),
            new Pasta('Spinach and broccoli pasta', 5.0),
        ];
    }

    public getDinnerMenu(): MenuItem[] {
        return [
            ...this.getLunchMenu(),
            new MainCourse('Angus beef with crispy potatoes', 12.00),
            new MainCourse('Marinated pork with vegetables', 9.00),
            new MainCourse('Duck with parsnip puree', 10.00),
        ];
    }
}
