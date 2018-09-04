import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {
    items: CartItem[] = [];

    clear() {
        this.items = [];
    }

    addItem(menuItem: MenuItem) {
        let foundItem = this.items.find(cartItem => menuItem.id === cartItem.menuItem.id);
        if (foundItem) {
            foundItem.quantity++;
        } else {
            this.items.push(new CartItem(menuItem));
        }
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    total(): number {
        return this.items
            .map(cartItem => cartItem.value())
            .reduce((prev, value) => prev + value, 0);
    }

}