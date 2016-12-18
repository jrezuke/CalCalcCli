import { Component, OnInit } from '@angular/core';
import { Subject } from './subject';

@Component({
  selector: 'app-subjects-new',
  templateUrl: './subjects-new.component.html',
  //template: 'Hi there!',
  styleUrls: ['./subjects-new.component.css']
})
export class SubjectsNewComponent implements OnInit {
  subject: Subject = new Subject();

  constructor() { }

  ngOnInit() {
  }

}
