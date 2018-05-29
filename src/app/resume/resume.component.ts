import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  designMethods = [
    'Adobe Creative Suite',
    'Axure',
    'Balsamiq',
    'Design Thinking',
    'Heuristic Evaluations',
    'Interaction Design',
    'Material Design Principles',
    'Paper Prototyping',
    'Persona Definitions',
    'Rapid Prototyping',
    'Sketch',
    'User Interviews',
    'Wireframing'
  ];
  devTechnologies = [
    'Angular',
    'AngularJS',
    'Bootstrap',
    'Bower',
    'CSS (Less & Sass)',
    'Grunt',
    'Gulp',
    'HTML',
    'JavaScript',
    'JQuery',
    'Karma',
    'Node',
    'Protractor',
    'SQL',
  ];

  constructor() { }

  ngOnInit() {
  }

}
