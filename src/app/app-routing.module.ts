import { NgModule} from '@angular/core';
import { RouterModule, PreloadAllModules, PreloadingStrategy } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'subjects', component: SubjectsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {};
