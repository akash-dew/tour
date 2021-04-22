import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourGuideModule } from './tour-guide/tour-guide.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TourGuideModule,
    NgxUsefulSwiperModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
