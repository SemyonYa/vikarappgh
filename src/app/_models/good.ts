export class Good {
    id: number;
    name: string;
    thickness: string;
    size: string;
    square: string;
    price: number;
    length: string;
    width: string;
    quantity: number;

    constructor(id: string, name: string, thickness: string, size: string, square: string, price: string, length: string, width: string) {
        this.id = Number.parseInt(id, 10);
        this.name = name;
        this.thickness = thickness;
        this.size = size;
        this.square = square;
        this.price = Number.parseInt(price, 10);
        this.length = length;
        this.width = width;
        this.quantity = 0;
    }

    setQuantity(q: number) {
        this.quantity = q;
    }

    getSum(): number {
        return this.price * this.quantity;
    }

    increment() {
        this.quantity = this.quantity < 50 ? this.quantity + 1 : 50;
    }

    decrement() {
        this.quantity = this.quantity > 0 ? this.quantity - 1 : 0;
    }
}
