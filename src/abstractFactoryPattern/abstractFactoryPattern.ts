import { ItalianRestaurant } from './factories/italianRestaurant';
import { ChineseRestaurant } from './factories/chineseRestaurant';
import { EstonianRestaurant } from './factories/estonianRestaurant';
import { printRestaurantMenus } from './utils';
import { printBlue } from '../beautifulPrint';

const patternExample = (): void => {
    printBlue('Abstract Factory Pattern');

    const italianRestaurant = new ItalianRestaurant();
    printRestaurantMenus(italianRestaurant);

    const chineseRestaurant = new ChineseRestaurant();
    printRestaurantMenus(chineseRestaurant);

    const estonianRestaurant = new EstonianRestaurant();
    printRestaurantMenus(estonianRestaurant);
};

if(require.main === module) {
    patternExample();
}

export {
    patternExample,
}
