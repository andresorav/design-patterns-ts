import { ItalianRestaurant } from './factories/italianRestaurant';
import { ChineseRestaurant } from './factories/chineseRestaurant';
import { EstonianRestaurant } from './factories/estonianRestaurant';
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
