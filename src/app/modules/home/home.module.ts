import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { HomeRoutingModule } from './home-routing.module';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { AboutComponent } from 'src/app/components/about/about.component';

@NgModule({
  declarations: [HomePage, CarouselComponent, AboutComponent],
  imports: [CommonModule, HomeRoutingModule, MdbCarouselModule],
  exports:[AboutComponent]
})
export class HomeSectionModule {}
