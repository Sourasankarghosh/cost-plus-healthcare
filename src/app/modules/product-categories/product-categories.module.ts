import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoriesPage } from './product-categories.page';
import { ProductCategoriesRoutingModule } from './product-categories-routing.module';

@NgModule({
  declarations: [ProductCategoriesPage],
  imports: [CommonModule, ProductCategoriesRoutingModule],
})
export class ProductCategoriesModule {}
