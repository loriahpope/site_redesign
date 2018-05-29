import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handlettering',
  templateUrl: 'handlettering.component.html',
  styleUrls: ['handlettering.component.scss']
})
export class HandletteringComponent implements OnInit {

  handletteringItems= [
    {
      "title": "'Beautiful Day'",
      "imgSrc": "beautiful_day.png",
      "alt": "Beautiful Day",
      "description": "Beautiful Day"
    },
    {
      "title": "'The best view comes after the hardest climb.'",
      "imgSrc": "climb.png",
      "alt": "'The best view comes after the hardest climb.'",
      "description": "'The best view comes after the hardest climb.'"
    },
    {
      "title": "'Be the Geek'",
      "imgSrc": "geek.png",
      "alt": "'Be the Geek'",
      "description": "'Be the Geek'"
    },
    {
      "title": "Hello!",
      "imgSrc": "hello.png",
      "alt": "Hello!",
      "description": "Hello!"
    },
    {
      "title": "'More ideas than time.'",
      "imgSrc": "ideas.png",
      "alt": "'More ideas than time.'",
      "description": "'More ideas than time.'"
    },
    {
      "title": "'All you need is love'",
      "imgSrc": "love.png",
      "alt": "'All you need is love'",
      "description": "'All you need is love'"
    },
    {
      "title": "'I wish my eyes could take photos'",
      "imgSrc": "photos.png",
      "alt": "'I wish my eyes could take photos'",
      "description": "'I wish my eyes could take photos'"
    },
    {
      "title": "'Positive thinking never killed anyone'",
      "imgSrc": "positive.png",
      "alt": "'Positive thinking never killed anyone'",
      "description": "'Positive thinking never killed anyone'"
    },
    {
      "title": "'Don't call me lucky, call me a badass.'",
      "imgSrc": "shondaRhimes.png",
      "alt": "'Don't call me lucky, call me a badass.'",
      "description": "'Don't call me lucky, call me a badass.'"
    },
    {
      "title": "'Don't fill your head with worries.'",
      "imgSrc": "worries.png",
      "alt": "'Don't fill your head with worries.'",
      "description": "'Don't fill your head with worries.'"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
