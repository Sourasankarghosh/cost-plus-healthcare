import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { HomeRoutingModule } from './home-routing.module';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

@NgModule({
  declarations: [HomePage, CarouselComponent],
  imports: [CommonModule, HomeRoutingModule, MdbCarouselModule],
})
export class HomeSectionModule {}
