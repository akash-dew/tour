import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticMenuComponent } from './components/static-menu/static-menu.component';
import { StaticSubjectComponent } from './components/static-subject/static-subject.component';
import { StaticChapterComponent } from './components/static-chapter/static-chapter.component';
import { TourGuideRoutingModule } from './tour-guide-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { StaticMylessonComponent } from './components/static-mylesson/static-mylesson.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [StaticMenuComponent, StaticSubjectComponent, StaticChapterComponent, StaticMylessonComponent],
  imports: [
    TourGuideRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxUsefulSwiperModule,
    CommonModule
  ]
})
export class TourGuideModule { }
