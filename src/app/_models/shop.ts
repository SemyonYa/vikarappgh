import { stringify } from 'querystring';

export class Shop {
    id: number;
    title: string;
    address: string;
    phone: string;
    phone2: string;

    constructor(id: string, title: string, address: string, phone: string, phone2: string) {
        this.id = Number.parseInt(id, 10);
        this.title = title;
        this.address = address;
        this.phone = phone;
        this.phone2 = phone2;
    }
}
