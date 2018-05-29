import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {AppRoutingModule} from "./app-routing.module";
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from '@angular/material/menu';
import { HelpComponent } from './portfolio/help/help.component';
import { IdeaComponent } from './portfolio/idea/idea.component';
import { VacationComponent } from './portfolio/vacation/vacation.component';
import { IconsComponent } from './portfolio/icons/icons.component';
import { HandletteringComponent } from './portfolio/handlettering/handlettering.component';
import { DailyUiComponent } from './portfolio/daily-ui/daily-ui.component';
import { HelpDemoComponent } from './portfolio/help-demo/help-demo.component';
import { GoogleAnalyticsEventsService } from './google-analytics-event.service';
import { OrderModule } from "ngx-order-pipe";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
    HelpComponent,
    IdeaComponent,
    VacationComponent,
    IconsComponent,
    HandletteringComponent,
    DailyUiComponent,
    HelpDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    OrderModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule

  ],
  providers: [GoogleAnalyticsEventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
