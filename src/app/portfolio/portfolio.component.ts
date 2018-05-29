import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioItems = [
    {
      title: 'Employee Help Screen',
      id: 'help',
    },
    {
      title: 'Employee Idea Site',
      id: 'idea',
    },
    {
      title: 'Employee Vacation Request Site',
      id: 'vacation',
    },
    {
      title: 'Material Design Icons',
      id: 'icons',
    },
    {
      title: 'Handlettering',
      id: 'handlettering'
    },
    {
      title: 'Daily UI Challenges',
      id: 'daily-ui'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewItem(id: string) {
    let routerString = 'portfolio/' + id;
    console.log(routerString);
    this.router.navigateByUrl(routerString);
  }

}
