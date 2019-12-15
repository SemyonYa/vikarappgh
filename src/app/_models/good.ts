export class Good {
    id: number;
    name: string;
    thickness: string;
    size: string;
    square: string;
    price: number;
    length: string;
    width: string;

    constructor(id: string, name: string, thickness: string, size: string, square: string, price: string, length: string, width: string) {
        this.id = Number.parseInt(id);
        this.name = name;
        this.thickness = thickness;
        this.size = size;
        this.square = square;
        this.price = Number.parseInt(price);
        this.length = length;
        this.width = width;
    }
}
