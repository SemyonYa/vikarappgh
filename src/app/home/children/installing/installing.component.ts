import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';
import { InstallItem } from 'src/app/_models/install-item';
import { DataService } from 'src/app/_services/data.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-installing',
  templateUrl: './installing.component.html',
  styleUrls: ['./installing.component.scss'],
})
export class InstallingComponent implements OnInit {
  slideOpts = {
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };
  installItems: InstallItem[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.installItems$
      .subscribe(
        (data: InstallItem[]) => {
          this.installItems = data;
        }
      );
  }
  scrolling(e: CustomEvent, cog: HTMLElement) {
    cog.style.transform = 'translate(0, -30%) rotate(' + e.detail.scrollTop + 'deg)';
  }
}
