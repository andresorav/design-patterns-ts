import { MenuItem } from './products/abstractMenuItem';
import { Restaurant } from './factories/abstractRestaurant';
import { printBlue, printYellow } from '../beautifulPrint';

interface GroupedMenuItems {
    [type: string]: MenuItem[];
}

const groupMenuItemsByType = (menuItems: MenuItem[]): GroupedMenuItems => {
    return menuItems.reduce((menuItems: GroupedMenuItems, current: MenuItem): GroupedMenuItems => {
        if (!menuItems[current.type]) {
            menuItems[current.type] = [];
        }

        menuItems[current.type].push(current);

        return menuItems;
    }, {});
};

const printMenuItems = (menuItems: MenuItem[], currency: string): void => {
    const groupedMenuItems = groupMenuItemsByType(menuItems);
    const itemsToPrint = [];

    Object.keys(groupedMenuItems).forEach((menuItemType: string, index: number): void => {
        // adds empty line before types, but not before first one
        if (index !== 0) {
            itemsToPrint.push('');
        }

        itemsToPrint.push(`~~~ ${menuItemType} ~~~`);

        groupedMenuItems[menuItemType].forEach((menuItem: MenuItem): void => {
            itemsToPrint.push(`${menuItem.name}: ${menuItem.price} ${currency}`);
        });
    });

    printYellow(itemsToPrint);
};

const printRestaurantMenus = (restaurant: Restaurant): void => {
    printBlue(`${restaurant.name} (${restaurant.cuisine})`);

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
        printBlue(menu.name);

        printMenuItems(menu.items, restaurant.currency);
    });
};

export {
    printRestaurantMenus,
}
