import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { APIService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  bannerList: any;
  bannerPath = environment.base_url + 'storage/bannerImages/';
  subscription = new Subscription();

  constructor(private _APIService: APIService) {}

  ngOnInit() {
    this.subscription.add(
      this._APIService.bannerList().subscribe((data: any) => {
        if (data.bannerList) {
          let bannerList = data.bannerList;
          bannerList.forEach((item: any, index: any) => {
            bannerList[index].bannerImage_name = item.bannerImage_name;
          });
          if (bannerList.length === 1) {
            this.bannerList = [...bannerList, ...bannerList];
          } else {
            this.bannerList = bannerList;
          }
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
