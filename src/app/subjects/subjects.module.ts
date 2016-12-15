import { NgModule } from '@angular/core';

import { SubjectsComponent } from './subjects.component';
import { SubjectsListComponent } from './subjects-list.component';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsService } from './subjects.service';

@NgModule({
  imports: [SubjectsRoutingModule],
  declarations: [SubjectsComponent, SubjectsListComponent],
  providers: [SubjectsService]
})

export class SubjectsModule { }
