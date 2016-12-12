import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalcEntryComponent } from './calc-entry.component';
import { FluidInfusionsComponent } from '../fluid-infusions/fluid-infusions.component';
import { ParenteralNutritionComponent } from '../parenteral-nutrition/parenteral-nutrition.component';
import { EnteralNutritionComponent } from '../enteral-nutrition/enteral-nutrition.component';
import { AdditivesComponent } from '../additives/additives.component';
import { OtherNutritionComponent } from '../other-nutrition/other-nutrition.component';

const calcEntryRoutes: Routes = [
  { path: '', component: CalcEntryComponent, outlet: "entryMenu" },
  { path: 'fluidinfusions', component: FluidInfusionsComponent },
  { path: 'parenteralnutrition', component: ParenteralNutritionComponent },
  { path: 'enteralnutrition', component: EnteralNutritionComponent },
  { path: 'additives', component: AdditivesComponent },
  { path: 'othernutrition', component: OtherNutritionComponent },

];

@NgModule({
  imports: [RouterModule.forChild(calcEntryRoutes)],
  exports: [RouterModule]

})
export class CalcEntryRoutingModule { }
