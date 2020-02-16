import { Injectable } from '@angular/core';
import { ICartItem } from '../_models/i-cart-item';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart$ = new BehaviorSubject<ICartItem[]>([]);
  constructor() { }

  initCart() {
    const currentCart = this.getCart();
    if (currentCart === null) {
      this.setCart([]);
    } else {
      this.setCart(currentCart);
    }
  }

  getCart() {
    return JSON.parse(localStorage.getItem('cart')) as Array<ICartItem>;
  }

  setCart(cartItems: ICartItem[]) {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.cart$.next(cartItems);
  }

  plus(id: number) {
    let cart = this.cart$.value;
    const currentItem = cart.find(i => i.id == id);
    if (currentItem !== undefined) {
      currentItem.quantity++;
    } else {
      cart.push({ id, quantity: 1 })
    }
    this.setCart(cart);
  }

  minus(id: number) {
    let cart = this.cart$.value;
    const currentItem = cart.find(i => i.id == id);
    if (currentItem !== undefined) {
      if (currentItem.quantity > 1) {
        currentItem.quantity--;
      } else {
        cart.splice(cart.findIndex(i => i.id == id), 1);
      }
    }
    this.setCart(cart);
  }

  clear() {
    this.setCart([]);
  }

  groupToCart(items: ICartItem[]) {
    this.setCart(items);
    console.log(items);
  }

}
