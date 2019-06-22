import { AbstractRestaurant } from './abstractRestaurant';
import { Youtiao } from '../products/youtiao';
import { Pudding } from '../products/pudding';
import { Noodles } from '../products/noodles';
import { Dumplings } from '../products/dumplings';
import { Soup } from '../products/soup';
import { MainCourse } from '../products/mainCourse';
import { Tea } from '../products/tea';
import { MenuItem } from '../products/abstractMenuItem';

export class ChineseRestaurant extends AbstractRestaurant {
    public readonly cuisine = 'chinese';
    public readonly currency = 'cny';
    public readonly name = 'Měiwèi de lǚchéng';

    public getBreakfastMenu(): MenuItem[] {
        return [
            new Youtiao('Yóutiáo with soy milk', 1),
            new Pudding('Tofu pudding', 0.5),
        ];
    }

    public getLunchMenu(): MenuItem[] {
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

    public getDinnerMenu(): MenuItem[] {
        return [
            ...this.getLunchMenu(),
            new MainCourse('Sweet and sour chicken with noodles', 2.5),
            new MainCourse('Beef chow fun', 2.5),
            new MainCourse('Kung pao chicken with rice', 3.0),
        ]
    }

    public getDrinks(): MenuItem[] {
        return [
            new Tea('Red tea', 1.0),
            new Tea('Black tea', 1.0),
            new Tea('Green tea', 1.0),
        ];
    }
}
