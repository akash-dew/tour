import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticMenuComponent } from './components/static-menu/static-menu.component';
import { StaticSubjectComponent } from './components/static-subject/static-subject.component';
import { StaticChapterComponent } from './components/static-chapter/static-chapter.component';
import { TourGuideRoutingModule } from './tour-guide-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [StaticMenuComponent, StaticSubjectComponent, StaticChapterComponent],
  imports: [
    TourGuideRoutingModule,
    NgbModule,
    NgxUsefulSwiperModule,
    CommonModule
  ]
})
export class TourGuideModule { }
