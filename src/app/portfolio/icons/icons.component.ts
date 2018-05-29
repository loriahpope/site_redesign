import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: 'icons.component.html',
  styleUrls: ['icons.component.scss']
})
export class IconsComponent implements OnInit {

  iconItems= [
  {
    "title": "Double Gear",
    "imgSrc": "gear_double.png",
    "alt": "Double Gear Icon",
    "description": "Double Gear Icon"
  },
  {
    "title": "Lightbulb",
    "imgSrc": "lightbulb.png",
    "alt": "Lightbulb Icon",
    "description": "Lightbulb Icon"
  },
  {
    "title": "Laptop",
    "imgSrc": "laptop.png",
    "alt": "Laptop Icon",
    "description": "Laptop Icon"
  },
  {
    "title": "Magnifying Glass",
    "imgSrc": "magnifying_glass.png",
    "alt": "Magnifying Glass Icon",
    "description": "Magnifying Glass Icon"
  },
  {
    "title": "Post-It Note",
    "imgSrc": "post_it.png",
    "alt": "Post-It Note Icon",
    "description": "Post-It Note Icon"
  },
  {
    "title": "Self-Portrait",
    "imgSrc": "loriah-avatar.png",
    "alt": "Self-Portrait Icon",
    "description": "Self-Portrait Icon"
  },
  {
    "title": "Solid Heart",
    "imgSrc": "solid_heart.png",
    "alt": "Solid Heart Icon",
    "description": "Solid-Heart Icon"
  }
];

  constructor() { }

  ngOnInit() {
  }

}
