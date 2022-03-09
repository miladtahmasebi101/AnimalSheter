import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchComponent } from './component/search/search.component';
import { BlogPostComponent } from './component/blog-post/blog-post.component';
import { BoxListComponent } from './component/box-list/box-list.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { PicturesComponent } from './component/pictures/pictures.component';
import { ProductsComponent } from './component/products/products.component';
import { SliderComponent } from './component/slider/slider.component';
import { TeamComponent } from './component/team/team.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { VideoComponent } from './component/video/video.component';
import { HttpClientModule } from '@angular/common/http'
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { TherapeuticTipsComponent } from './component/therapeutic-tips/therapeutic-tips.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchComponent,
    BlogPostComponent,
    BoxListComponent,
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    PicturesComponent,
    ProductsComponent,
    SliderComponent,
    TeamComponent,
    VideoComponent,
    TherapeuticTipsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CdkAccordionModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
