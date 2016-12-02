import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalcEntryComponent } from './calc-entry.component';

const calcEntryRoutes: Routes = [
  { path: '', component: CalcEntryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(calcEntryRoutes)],
  exports: [RouterModule]

})
export class CalcEntryRoutingModule { }
