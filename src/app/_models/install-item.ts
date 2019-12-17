import { HelpMe } from '../_services/help-me';
import { InstallItemGood } from './install-item-good';

export class InstallItem {
    id: number;
    name: string;
    works: string[];
    recommendations: string[];
    results: string[];
    img: string;
    goods: InstallItemGood[];

    constructor(id: string, name: string, works: string, recommendations: string, asResult: string, img: string = '') {
        this.id = Number.parseInt(id, 10);
        this.name = name;
        this.works = works ? works.split(';;') : [];
        this.recommendations = recommendations ? recommendations.split(';;') : [];
        this.results = asResult ? asResult.split(';;') : [];
        this.img = HelpMe.getImg(img);
        this.goods = [];
    }

    fillGoods(goods: InstallItemGood[]) {
        this.goods = goods;
    }
}
