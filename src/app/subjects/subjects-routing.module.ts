import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsListComponent } from './subjects-list.component';
import { SubjectsComponent } from './subjects.component';

const subjectsRoutes: Routes = [
  {
    path: '', component: SubjectsComponent,
    children: [
      {
        path: '', component: SubjectsListComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(subjectsRoutes)],
  exports: [RouterModule]

})
export class SubjectsRoutingModule { }
