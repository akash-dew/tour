import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourGuideModule } from './tour-guide/tour-guide.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { TourGuideService } from './tour-guide/tour-guide.service';
export function appInit(tourGuideService: TourGuideService) {
  return () => tourGuideService.getIntroJSON();
}
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
  providers: [TourGuideService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      multi: true,
      deps: [TourGuideService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
