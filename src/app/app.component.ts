import { Component, ViewEncapsulation } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationEnd } from '@angular/router';
import { MenuService } from './_services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private modalController: ModalController,
    private menuService: MenuService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.router.events
        .subscribe(
          (e) => {
            if (e instanceof NavigationEnd) {
              this.menuService.isFirstPage.next(e.url === '/home/first');
              this.modalController.getTop()
                .then(
                  (mv) => {
                    if (mv !== undefined) {
                      this.modalController.dismiss();
                    }
                  }
                )
            }
          }
        );
    });
  }
}
