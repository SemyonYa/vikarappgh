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
    console.log('cart', currentCart);
    if (currentCart === null) {
      this.setCart([]);
      console.log('cart2', this.getCart());
    } else {
      this.setCart(this.getCart());
    }
  }

  getCart() {
    return JSON.parse(localStorage.getItem('cart')) as Array<ICartItem>;
  }

  setCart(cartItems: ICartItem[]) {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.cart$.next(cartItems);
  }


  minus(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const id = Number.parseInt(target.id, 10);
    console.log('id', id);
    let sib = target.nextSibling as HTMLElement;
    console.log('val', sib.innerText);
    const cart = this.getCart();
    const currentGood: ICartItem = cart.find(i => i.id === id);
    if (currentGood !== undefined) {
      if (currentGood.quantity === 1) {
        const i = cart.indexOf(currentGood);
        cart.splice(i, 1);
        this.setCart(cart);
        sib.innerText = '0';
      } else if (currentGood.quantity > 1) {
        currentGood.quantity--;
        this.setCart(cart);
        sib.innerText = currentGood.quantity.toString();
      }
    }
  }

  plus(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const id = Number.parseInt(target.id, 10);
    console.log('id', id);
    let sib = target.previousSibling as HTMLElement;
    console.log('val', sib.innerText);
    const cart = this.getCart();
    const currentGood: ICartItem = cart.find(i => i.id === id);
    if (currentGood === undefined) {
      cart.push({ id, quantity: 1 });
      this.setCart(cart);
      sib.innerText = '1';
    } else {
      currentGood.quantity++;
      this.setCart(cart);
      sib.innerText = currentGood.quantity.toString();
    }
  }

}
