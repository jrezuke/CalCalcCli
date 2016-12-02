import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'calc-home',
  templateUrl: './calc-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calc-home.component.css']
})
export class CalcHomeComponent implements OnInit {
  public tabs:Array<any> = [
    { title: 'Fluid Infusions', content: 'Fluid Infusions'},
    { title: 'Parenteral Nutrition', content: 'Parenteral Nutrition'},
    { title: 'Enteral Nutrition', content: 'Enteral Nutrition'},
    { title: 'Additives', content: 'Additives', customClass: 'customClass' },
    { title: 'Other Nutrition', content: 'Other Nutrition'}
  ];

  constructor() { }

  ngOnInit() {
    this.tabs[0].active = true;
  }

  onSelect(tab: any, i:number) {
    this.tabs[i].active = true;
  }
  public alertMe(tab:any):void {
    setTimeout(function ():void {
      console.log("tab", tab);
      alert('You\'ve selected the alert tab!');
    });
  };

  public setActiveTab(index:number):void {
    this.tabs[index].active = true;
  };

  public removeTabHandler(/*tab:any*/):void {
    console.log('Remove Tab handler');
  };
}
