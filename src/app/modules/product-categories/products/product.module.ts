import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPage } from './product.page';
import { ProductRoutingModule } from './product-routing.module';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';

@NgModule({
  declarations: [ProductPage],
  imports: [CommonModule, ProductRoutingModule, MdbModalModule],
})
export class ProductModule {}
