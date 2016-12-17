import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SitesComponent } from './sites.component';
import { SitesListComponent } from './sites-list.component';
import { SitesNewComponent } from './sites-new.component';
import { SitesEditComponent } from './sites-edit.component';


const sitesRoutes: Routes = [
  {
    path: '', component: SitesComponent,
    children: [
      { path: '', component: SitesListComponent },
      { path: 'new', component: SitesNewComponent },
      { path: ':id', component: SitesEditComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(sitesRoutes)],
  exports: [RouterModule]

})
export class SitesRoutingModule { }
