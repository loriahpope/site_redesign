import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {ResumeComponent} from "./resume/resume.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ContactComponent} from "./contact/contact.component";
import {HelpComponent} from "./portfolio/help/help.component";
import {IconsComponent} from "./portfolio/icons/icons.component";
import {VacationComponent} from "./portfolio/vacation/vacation.component";
import {IdeaComponent} from "./portfolio/idea/idea.component";
import {DailyUiComponent} from "./portfolio/daily-ui/daily-ui.component";
import {HandletteringComponent} from "./portfolio/handlettering/handlettering.component";
import {HelpDemoComponent} from "./portfolio/help-demo/help-demo.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'portfolio/help',
    component: HelpComponent
  },
  {
    path: 'portfolio/help/help-demo',
    component: HelpDemoComponent
  },
  {
    path: 'portfolio/idea',
    component: IdeaComponent
  },
  {
    path: 'portfolio/vacation',
    component: VacationComponent
  },
  {
    path: 'portfolio/icons',
    component: IconsComponent
  },
  {
    path: 'portfolio/handlettering',
    component: HandletteringComponent
  },
  {
    path: 'portfolio/daily-ui',
    component: DailyUiComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
