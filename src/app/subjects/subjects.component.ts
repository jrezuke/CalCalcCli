import { Component, OnInit } from '@angular/core';
import { SubjectsService } from './subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //this._subjectsService.getSubjects().subscribe(subjects => console.log("SubjectsComponent.ngOnInit getSubjects", subjects));
  }


}
