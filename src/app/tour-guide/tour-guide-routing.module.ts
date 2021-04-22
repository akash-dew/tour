import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticMenuComponent } from './components/static-menu/static-menu.component';
import { StaticSubjectComponent } from './components/static-subject/static-subject.component';
import { StaticChapterComponent } from './components/static-chapter/static-chapter.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: "menu",
    pathMatch: "full"
  },
  {
      path: "menu",
      component: StaticMenuComponent,
  },
  {
      path: "chapter",
      component: StaticChapterComponent,
  },
  {
      path: "subject",
      component: StaticSubjectComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourGuideRoutingModule {}
