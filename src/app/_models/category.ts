import { HelpMe } from '../_services/help-me';
import { GoodGroup } from './good-group';

export class Category {
    id: number;
    name: string;
    description: string;
    n: number;
    img: string;
    goodGroups: GoodGroup[];

    constructor(id: string, name: string, description: string, n: string, img: string = '') {
        this.id = Number.parseInt(id);
        this.name = name;
        this.description = description;
        this.n = Number.parseInt(n);
        this.img = HelpMe.getImg(img);
        this.goodGroups = [];
    }

    fillGoodGroups(goodGroups: GoodGroup[]) {
        this.goodGroups = goodGroups;
    }
}
