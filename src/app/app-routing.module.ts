import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeSectionModule),
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'product-categories',
    loadChildren: () =>
      import('./modules/product-categories/product-categories.module').then(
        (m) => m.ProductCategoriesModule
      ),
  },
  { path:'**' , redirectTo:'/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
