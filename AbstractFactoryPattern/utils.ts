import { IRestaurant } from './Factories/IRestaurant';
import { IMenuItem } from './Products/IMenuItem';

interface GroupedMenuItems {
    [type: string]: IMenuItem[];
}

const groupMenuItemsByType = (menuItems: IMenuItem[]): GroupedMenuItems => {
    return menuItems.reduce((menuItems: GroupedMenuItems, current: IMenuItem): GroupedMenuItems => {
        if (!menuItems[current.type]) {
            menuItems[current.type] = [];
        }

        menuItems[current.type].push(current);

        return menuItems;
    }, {});
};

const printMenuItems = (menuItems: IMenuItem[], currency: string): void => {
    const groupedMenuItems = groupMenuItemsByType(menuItems);

    Object.keys(groupedMenuItems).forEach((menuItemType: string): void => {
        console.log(`~ ${menuItemType} ~`);

        groupedMenuItems[menuItemType].forEach((menuItem: IMenuItem): void => {
            console.log(`- ${menuItem.name}: ${menuItem.price} ${currency}`);
        });

        console.log();
    });
};

const printMenuItemsTotalPrice = (menuItems: IMenuItem[], currency: string): void => {
    const priceForItems = menuItems.reduce((sum, current): number => sum + current.price, 0);
    const total = `Total price for menu: ${priceForItems} ${currency}`;

    console.log(Array(total.length + 1).join('_'));
    console.log(total);
};

const printRestaurantMenus = (restaurant: IRestaurant): void => {
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
    }, {
        name: 'Drinks',
        items: restaurant.getDrinks(),
    }];

    menus.forEach((menu): void => {
        console.log(`\n*** ${menu.name} ***`);

        printMenuItems(menu.items, restaurant.currency);
        printMenuItemsTotalPrice(menu.items, restaurant.currency);
    });
};

export {
    printRestaurantMenus,
}
