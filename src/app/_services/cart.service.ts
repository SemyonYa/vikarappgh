import { Injectable } from '@angular/core';
import { ICartItem } from '../_models/i-cart-item';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  initCart() {
    const currentCart = this.getCart();
    console.log('cart', currentCart);
    if (currentCart === null) {
      this.setCart([]);
      console.log('cart2', this.getCart());
    }
  }

  getCart() {
    return JSON.parse(localStorage.getItem('cart')) as Array<ICartItem>;
  }

  setCart(cartItems: ICartItem[]) {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }

  plus(id: number) {
    const cart = this.getCart();
    const currentGood: ICartItem = cart.find(i => i.id === id);
    console.log('cur', currentGood);
    if (currentGood === undefined) {
      cart.push({id, quantity: 1});
    } else {
      currentGood.quantity++;
    }
    this.setCart(cart);
  }

  minus(id, sib) {
    const cart = this.getCart();
    const currentGood: ICartItem = cart.find(i => i.id === id);
    if (currentGood !== undefined) {
      if (currentGood.quantity === 1) {
        const i = cart.indexOf(currentGood);
        cart.splice(i, 1);
        this.setCart(cart);
      } else if (currentGood.quantity > 1) {
        currentGood.quantity--;
        this.setCart(cart);
      }
    }
  }

  change(obj, val) {
    obj.innerText = val;
  }

}
