import { IRestaurant } from './Factories/IRestaurant';
import { IMenuItem } from './Products/IMenuItem';

const printMenuItems = (menuItems: IMenuItem[], currency: string) => {
	menuItems.map((menuItem) => {
		console.log(`- ${menuItem.name}: ${menuItem.price} ${currency}`);
	});
};

const printMenuItemsTotalPrice = (menuItems: IMenuItem[], currency: string) => {
	const priceForItems = menuItems.reduce((sum, current) => sum + current.price, 0);
	console.log(`Total: ${priceForItems} ${currency}`);
};

const printRestaurantMenus = (restaurant: IRestaurant) => {
	console.log(`\n~~~ ${restaurant.name} (${restaurant.cuisine}) ~~~`);

	const menus = [{
		name: 'Breakfast',
		items: restaurant.getBreakfastMenu(),
	}, {
		name: 'Lunch',
		items: restaurant.getLunchMenu(),
	}, {
		name: 'Dinner',
		items: restaurant.getDinnerMenu(),
	}];

	menus.map((menu) => {
		console.log(`\n*** ${menu.name} ***`);

		printMenuItems(menu.items, restaurant.currency);
		printMenuItemsTotalPrice(menu.items, restaurant.currency);
	});
};

export {
	printRestaurantMenus,
}
