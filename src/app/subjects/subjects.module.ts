import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SubjectsComponent } from './subjects.component';
import { SubjectsListComponent } from './subjects-list.component';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectsService } from './subjects.service';
import { SubjectEditComponent } from './subject-edit.component';

@NgModule({
  imports: [SubjectsRoutingModule, CommonModule, FormsModule],
  declarations: [SubjectsComponent,
    SubjectsListComponent,
    SubjectEditComponent],
  providers: [SubjectsService]
})

export class SubjectsModule { }
