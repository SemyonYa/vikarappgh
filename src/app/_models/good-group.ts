import { HelpMe } from '../_services/help-me';
import { Good } from './good';

export class GoodGroup {
    id: number;
    name: string;
    description: string;
    thicknessOf: string;
    img: string;
    goods: Good[];

    constructor(id :string, name: string, description: string, thickness_of: string, img: string = '') {
        this.id = Number.parseInt(id);
        this.name = name;
        this.description = description;
        this.thicknessOf = thickness_of;
        this.img = HelpMe.getImg(img);
    }

    fillGoods(goods: Good[]) {
        this.goods = goods;
    }
}
