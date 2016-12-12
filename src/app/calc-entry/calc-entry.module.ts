import { NgModule } from '@angular/core';
import { CalcEntryRoutingModule } from './calc-entry-routing.module';
import { CalcEntryComponent } from './calc-entry.component';
import { FluidInfusionsComponent } from '../fluid-infusions/fluid-infusions.component';
import { ParenteralNutritionComponent } from '../parenteral-nutrition/parenteral-nutrition.component';
import { EnteralNutritionComponent } from '../enteral-nutrition/enteral-nutrition.component';
import { AdditivesComponent } from '../additives/additives.component';
import { OtherNutritionComponent } from '../other-nutrition/other-nutrition.component';

@NgModule({
  imports: [CalcEntryRoutingModule],
  exports: [CalcEntryComponent],
  declarations: [CalcEntryComponent,
    FluidInfusionsComponent,
    ParenteralNutritionComponent,
    EnteralNutritionComponent,
    AdditivesComponent,
    OtherNutritionComponent],
  providers: [],
})
export class CalcEntryModule { }
