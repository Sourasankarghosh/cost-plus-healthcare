import { Component } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  bannerList: any;
  bannerPath = environment.base_url + 'storage/bannerImages/';

  constructor(private _APIService: APIService) {}

  ngOnInit() {
    this._APIService.bannerList().subscribe((data: any) => {
      if (data.bannerList) {
        let bannerList = data.bannerList;
        bannerList.forEach((item: any, index: any) => {
          bannerList[index].bannerImage_name =
            this.bannerPath + item.bannerImage_name;
        });
        this.bannerList = bannerList;
      }
    });
  }
}
