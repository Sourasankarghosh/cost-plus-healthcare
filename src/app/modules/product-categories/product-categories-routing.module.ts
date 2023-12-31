import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategoriesPage } from './product-categories.page';

const routes: Routes = [
  {
    path: '',
    component: ProductCategoriesPage,
  },
  {
    path: 'product/:category_id',
    loadChildren: () =>
      import('./products/product.module').then((m) => m.ProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductCategoriesRoutingModule {}
