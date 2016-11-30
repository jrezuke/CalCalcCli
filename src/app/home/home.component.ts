import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public tabs:Array<any> = [
    {title: 'Dynamic Title 1', content: 'Dynamic content 1'},
    {title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true},
    {title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true},
    {title: 'Dynamic Title 4', content: 'Dynamic content 4', customClass: 'customClass'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelect(tab: any) {
    alert(tab.title);
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
