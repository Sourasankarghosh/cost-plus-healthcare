import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { DetailsComponent } from './details/details.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

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
  categoryDetails: any = {};
  modalRef: MdbModalRef<DetailsComponent> | null = null;

  constructor(
    private _APIService: APIService,
    private activatedRoute: ActivatedRoute,
    private modalService: MdbModalService
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
      if (data && data.categoryList) {
        data.categoryList.forEach((element: any) => {
          if (parseInt(element.id) === parseInt(this.categoryId)) {
            this.categoryDetails = element;
          }
        });
      }
    });
  }

  openModal(product: any) {
    this.modalRef = this.modalService.open(DetailsComponent, {
      data: { product: product },
    });
  }
}
