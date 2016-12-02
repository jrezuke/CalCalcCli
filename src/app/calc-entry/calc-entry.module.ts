import { NgModule } from '@angular/core';
import { CalcEntryRoutingModule } from './calc-entry-routing.module';
import { CalcEntryComponent } from './calc-entry.component';

@NgModule({
  imports: [CalcEntryRoutingModule],
  exports: [CalcEntryComponent],
  declarations: [CalcEntryComponent],
  providers: [],
})
export class CalcEntryModule { }
