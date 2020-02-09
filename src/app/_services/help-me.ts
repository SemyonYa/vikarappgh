import { environment } from 'src/environments/environment';

export class HelpMe {
    static getImg(img: string = '') {
        return img ? environment.host + '/web/images/' + img : '';
    }

    static getImgThumb(img: string = '') {
        return img ? environment.host + '/web/images/____' + img : '';  // /assets/icon/logo_sq_new.svg
    }
}
