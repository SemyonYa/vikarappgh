import { HelpMe } from '../_services/help-me';

export class InstallItem {
    id: number;
    name: string;
    works: string;
    recomendations: string;
    asResult: string;
    img: string;

    constructor(id: string, name: string, works: string, recomendations: string, as_result: string, img: string = '') {
        this.id = Number.parseInt(id, 10);
        this.name = name;
        this.works = works;
        this.recomendations = recomendations;
        this.asResult = as_result;
        this.img = HelpMe.getImg(img);
    }
}
