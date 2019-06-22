import { ItalianRestaurant } from './Factories/ItalianRestaurant';
import { ChineseRestaurant } from './Factories/ChineseRestaurant';
import { EstonianRestaurant } from './Factories/EstonianRestaurant';
import { printRestaurantMenus } from './utils';

const patternExample = (): void => {
    const italianRestaurant = new ItalianRestaurant();
    printRestaurantMenus(italianRestaurant);

    const chineseRestaurant = new ChineseRestaurant();
    printRestaurantMenus(chineseRestaurant);

    const estonianRestaurant = new EstonianRestaurant();
    printRestaurantMenus(estonianRestaurant);
};

export {
    patternExample,
}
