import { AbstractRestaurant } from './abstractRestaurant';
import { AbstractMenuItem, MenuItem } from '../products/abstractMenuItem';
import { Caffe } from '../products/caffe';
import { Croissant } from '../products/croissant';
import { Sandwich } from '../products/sandwich';
import { Pasta } from '../products/pasta';
import { Soup } from '../products/soup';
import { Pizza } from '../products/pizza';
import { Risotto } from '../products/risotto';
import { MainCourse } from '../products/mainCourse';

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

    public getDrinks(): MenuItem[] {
        return [
            new Caffe('Caffe latte', 2.5),
            new Caffe('Cappuccino', 3.0),
            new Caffe('Espresso', 2.0),
        ];
    }
}
