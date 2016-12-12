import {
  Component, OnInit,
  trigger, state, transition,
  style, animate
} from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationExtras, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('sideBarVisibility', [
      state('show', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(100%)'
        }),
        animate('0.5s ease-in')
      ]),
      transition('* => void', [
        animate('0.2s 10 ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ]),
    trigger('sideBarVisibility2', [
      state('show', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(100%)'
        }),
        animate('0.5s ease-in')
      ]),
      transition('* => void', [
        animate('0.2s 10 ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'app works!';
  hideMainSideMenu: boolean = false;
  state: string = 'show';
  state2: string = 'hide';

  constructor(private _router: Router,
    private _activatedRout: ActivatedRoute) { }

  ngOnInit() {
    // this._activatedRout.url.subscribe(() => {
    //   console.log("AppComponent.constructor activatedRout url.subscribe:", this._activatedRout.snapshot);
    // });

    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log("appComponent.ngInit.this._router.events.subscribe NavigationStart-event:", event);
        //this.onPathChange(event.url);

      }
      if (event instanceof NavigationEnd) {
        console.log("appComponent.ngInit.this._router.events.subscribe NavigationEnd-event:", event);
        this.onPathChange(event.url);
      }
    });
  }

  onPathChange(url: string) {
    console.log("onPathChange path:", url);
    if (url.startsWith("/entry")) {
      this.hideMainSideMenu = true;
      this.state = "hide";
      this.state2 = "show";
    }
    else {
      this.hideMainSideMenu = false;
      this.state = "show";
      this.state2 = "hide";
    }
  }
}
