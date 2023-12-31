import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'product-page',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage {
  subscription = new Subscription();
  productList: any;
  categoryId: number | any = '';
  bannerPath = environment.base_url + 'storage/thumbImages/';
  categoryDetails:any = {};

  constructor(
    private _APIService: APIService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      this.categoryId = data?.params?.category_id;
      if (this.categoryId) {
        this.fetchProductList();
        this.fetchCategoryDetails();
      }
    });
  }

  fetchProductList() {
    this._APIService.productList(this.categoryId).subscribe((data: any) => {
      this.productList = data['productList'];
    });
  }

  fetchCategoryDetails() {
    this._APIService.categoryList().subscribe((data: any) => {
      if(data && data.categoryList){
        data.categoryList.forEach((element:any) => {
          if(parseInt(element.id) === parseInt(this.categoryId)){
            this.categoryDetails = element
          }
        });
      }
    });
  }
}
