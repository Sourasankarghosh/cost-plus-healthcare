import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPage } from './product.page';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductPage],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
