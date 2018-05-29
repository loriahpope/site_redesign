import { Component } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import {Location} from "@angular/common";
import {GoogleAnalyticsEventsService} from "./google-analytics-event.service";

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  location;
  path: string;
  _isPortfolioPath: boolean = false;

  constructor(private _router: Router, private _location: Location, public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {
    _router.events.subscribe((event) => {
      window.scroll(0,0);

      this.location = _location;
      this.path = this.location.path();
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  isPortfolioPath() {
    if (this.path === '/portfolio/help' ||
        this.path === '/portfolio/idea' ||
        this.path === '/portfolio/vacation' ||
        this.path === '/portfolio/icons' ||
        this.path === '/portfolio/handlettering' ||
        this.path === '/portfolio/daily-ui') {
      return true;
    } else return false;
  }

  submitEvent() {
    this.googleAnalyticsEventsService.emitEvent("testCategory", "testAction", "testLabel", 10);
  }
}
