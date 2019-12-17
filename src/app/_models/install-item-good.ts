import { Good } from './good';

export class InstallItemGood {
    good: Good;
    quantity: number;

    constructor(good: Good, quantity: string) {
        this.good = good;
        this.quantity = Number.parseInt(quantity, 10);
    }
}
