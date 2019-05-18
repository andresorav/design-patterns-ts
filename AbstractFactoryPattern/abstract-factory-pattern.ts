import { ItalianRestaurant } from './Factories/ItalianRestaurant';
import {
	printRestaurantMenus,
} from './utils';
import { ChineseRestaurant } from './Factories/ChineseRestaurant';
import { EstonianRestaurant } from './Factories/EstonianRestaurant';


const italianRestaurant = new ItalianRestaurant('Un delizioso viaggio');
printRestaurantMenus(italianRestaurant);

const chineseRestaurant = new ChineseRestaurant('Měiwèi de lǚchéng');
printRestaurantMenus(chineseRestaurant);

const estonianRestaurant = new EstonianRestaurant('Maitsev teekond');
printRestaurantMenus(estonianRestaurant);
