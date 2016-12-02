import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, PreloadingStrategy } from "@angular/router";

import { CalcHomeComponent } from './calc-home/calc-home.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes = [
  { path: 'home', component: CalcHomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'entry', loadChildren: 'app/calc-entry/calc-entry.module#CalcEntryModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { };
