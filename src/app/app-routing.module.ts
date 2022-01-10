import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {LectureComponent} from './lecture/lecture.component';
import {AdaptiveWebComponent} from './adaptive-web/adaptive-web.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'db', component: LectureComponent},
  {path: 'adaptive-web', component: AdaptiveWebComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
