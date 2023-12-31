import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-categories-page',
  templateUrl: './product-categories.page.html',
  styleUrls: ['./product-categories.page.scss'],
})
export class ProductCategoriesPage {
  subscription = new Subscription();
  categoryList: any;

  constructor(private _APIService: APIService, private router: Router) {}

  ngOnInit() {
    this.subscription.add(
      this._APIService.categoryList().subscribe((data: any) => {
        this.categoryList = data.categoryList;
      })
    );
  }

  navigateToProduct(id: string) {
    this.router.navigate([`product-categories/product/${parseInt(id)}`]);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
