import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BigGalleryComponent } from './big-gallery/big-gallery.component';
import { BigSliderComponent } from './component/big-slider/big-slider.component';
import { FaqComponent } from './component/faq/faq.component';
import { SearchComponent } from './component/search/search.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path:'' , component: HomePageComponent},
  {path:'' ,  component: SearchComponent},
  {path:'faq-page' ,  component: FaqComponent},
  {path:'big-slider' ,  component: BigSliderComponent},
  {path:'big-gallery' ,  component: BigGalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
