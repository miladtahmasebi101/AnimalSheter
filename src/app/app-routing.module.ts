import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BigGalleryComponent } from './pages/big-gallery/big-gallery.component';
import { BigSliderComponent } from './pages/big-slider/big-slider.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SearchComponent } from './component/search/search.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '', component: SearchComponent },
  { path: 'faq-page', component: FaqComponent },
  { path: 'big-slider', component: BigSliderComponent },
  { path: 'big-gallery', component: BigGalleryComponent },
  { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
