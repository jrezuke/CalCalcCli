import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, PreloadingStrategy } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'subjects', loadChildren: 'app/subjects/subjects.module#SubjectsModule' },
  { path: 'sites', loadChildren: 'app/sites/sites.module#SitesModule' },
  { path: 'entry', loadChildren: 'app/calc-entry/calc-entry.module#CalcEntryModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { };
