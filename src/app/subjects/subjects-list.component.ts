import { Component, OnInit } from '@angular/core';
import { SubjectsService } from './subjects.service'
import { Subject } from './subject';

@Component({
  selector: "subject-list",
//   template: `<div>
//   <h2>subjects list is working!</h2>
//   <router-outlet></router-outlet>
// </div>`
  templateUrl: "./subjects-list.component.html"
})

export class SubjectsListComponent implements OnInit {
  public subjects: Subject[];
  public errorMessage: any;
  _subjectsService: SubjectsService;

  constructor(subjectsService: SubjectsService) {
    this._subjectsService = subjectsService;
  }

  ngOnInit(): void {
    this._subjectsService.getSubjects()
      .subscribe(
      subjects => this.subjects = subjects,
      error => this.errorMessage = <any>error);
  }
}
