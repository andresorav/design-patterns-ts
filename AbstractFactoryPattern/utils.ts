import { IRestaurant } from './Factories/IRestaurant';
import { IMenuItem } from './Products/IMenuItem';

const printMenuItems = (menuItems: IMenuItem[], currency: string) => {
	const groupedMenuItems = menuItems.reduce(function(menuItems, current) {
		(menuItems[current.type] = menuItems[current.type] || []).push(current);

		return menuItems;
	}, {});

	Object.keys(groupedMenuItems).map((menuItemType) => {
		console.log(`~ ${menuItemType} ~`);

		groupedMenuItems[menuItemType].map((menuItem) => {
			console.log(`- ${menuItem.name}: ${menuItem.price} ${currency}`);
		});

		console.log();
	});
};

const printMenuItemsTotalPrice = (menuItems: IMenuItem[], currency: string) => {
	const priceForItems = menuItems.reduce((sum, current) => sum + current.price, 0);

	console.log(Array(14).join('_'));
	console.log(`Total: ${priceForItems} ${currency}`);
};

const printRestaurantMenus = (restaurant: IRestaurant) => {
	console.log(`\n~~~ ${restaurant.name} (${restaurant.cuisine} restaurant) ~~~`);

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
