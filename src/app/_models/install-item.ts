import { HelpMe } from '../_services/help-me';
import { InstallItemGood } from './install-item-good';
import { ICartItem } from './i-cart-item';

export class InstallItem {
    id: number;
    name: string;
    works: string[];
    recommendations: string[];
    results: string[];
    img: string;
    installItemGoods: InstallItemGood[];
    cartItems: ICartItem[];

    constructor(id: string, name: string, works: string, recommendations: string, asResult: string, img: string = '') {
        this.id = Number.parseInt(id, 10);
        this.name = name;
        this.works = works ? works.split(';;') : [];
        this.recommendations = recommendations ? recommendations.split(';;') : [];
        this.results = asResult ? asResult.split(';;') : [];
        this.img = HelpMe.getImg(img);
        this.installItemGoods = [];
        this.cartItems = [];
    }

    fillGoods(installItemGoods: InstallItemGood[]) {
        this.installItemGoods = installItemGoods;
        for (const iiGood of installItemGoods) {
            this.cartItems.push({ id: iiGood.good.id, quantity: iiGood.quantity})
        }
    }
}
