import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-ui',
  templateUrl: 'daily-ui.component.html',
  styleUrls: ['daily-ui.component.scss']
})
export class DailyUiComponent implements OnInit {
  dailyUIChallenges = [
    {
      id: 1,
      prompt: 'Create a Sign Up Page',
      description: `
      <p>I wanted to start out with something simple, as as someone obsessed with Flipboard, I thought a sign-in page for a digital magazine (think ThoughtCatalog meets Tumblr meets Medium) would be a good place to start. I wanted to keep the overall design clean, and include options to sign in with social media. The navbar lists a few categories, as the user does not necessarily need to have an account in order to view content.</p>
      `,
      imgSrc: '001.png',
      alt: 'Sign Up Page'
    },
    {
      id: 2,
      prompt: 'Credit Card Payment',
      description: `
      <p>For this challenge, I went with a simple design. The user is able to swipe though the items in their cart, and the item description and cost is visible for each. The credit card information form is kept clean and simple, with an option to save the information. On checkout, the button reiterates the cost, so the user can confirm the price as well. </p> 
      `,
      imgSrc: '002-3.png',
      alt: 'Credit Card Payment'
    },
    {
      id: 3,
      prompt: 'Landing Page (Above the Fold)',
      description: `
      <p>Although I'm definitely not a "cool kid", I thought I'd channel the vibe I see on so many e-retail sites to create this landing page. It's super simple, with links to all relevant shopping categories, your account, and a contact page, with the ongoing promotion for "Cool-Cut Denim" front and center.</p>
      `,
      imgSrc: '003.png',
      alt: 'Landing Page (Above the Fold)'
    },
    {
      id: 4,
      prompt: 'Calculator',
      description: `
      <p>For this challenge, I wanted to go with a slightly different calculator. This UI takes your common spending categories and helps to calculate how much money you'll have left over after budgeting for certain categories.</p>
      `,
      imgSrc: '004.png',
      alt: 'Calculator'
    },
    {
      id: 5,
      prompt: 'App Icon',
      description: `
      <p>I don't have a dog (yet), but if I did, having such a busy lifestyle in the city would mean not being able to take my pupper out all the time. This App Icon is imagined for a dog-walking service (Fetch!) that also plays with your dog, giving Rover that quality one-on-one time you may not always be home to give!</p>
      `,
      imgSrc: '005.png',
      alt: 'App Icon'
    },
    // {
    //   id: 6,
    //   prompt: 'User Profile',
    //   description: `
    //   <p>Coming Soon!</p>
    //   `,
    //   imgSrc: '',
    //   alt: 'User Profile'
    // },
    // {
    //   id: 7,
    //   prompt: 'Settings',
    //   description: `
    //   <p>Coming Soon!</p>
    //   `,
    //   imgSrc: '',
    //   alt: 'Settings'
    // },
    // {
    //   id: 8,
    //   prompt: '404 Page',
    //   description: `
    //   <p>Coming Soon!</p>
    //   `,
    //   imgSrc: '',
    //   alt: '404 Page'
    // },
    // {
    //   id: 9,
    //   prompt: 'Music Player',
    //   description: `
    //   <p>Coming Soon!</p>
    //   `,
    //   imgSrc: '',
    //   alt: 'Music Player'
    // },
    // {
    //   id: 10,
    //   prompt: 'Social Share',
    //   description: `
    //   <p>Coming Soon!</p>
    //   `,
    //   imgSrc: '',
    //   alt: 'Social Share'
    // },
    // {
    //   id: 11,
    //   prompt: 'Flash Message (Error/Success)',
    //   description: `
    //   <p>Coming Soon!</p>
    //   `,
    //   imgSrc: '',
    //   alt: 'Flash Message (Error/Success)'
    // },
    // {
    //   id: 12,
    //   prompt: 'E-Commerce Shop',
    //   description: `
    //   <p>Coming Soon!</p>
    //   `,
    //   imgSrc: '',
    //   alt: 'E-Commerce Shop'
    // },
    // {
    //   id: 13,
    //   prompt: 'Direct Messaging',
    //   description: `
    //   <p>Coming Soon!</p>
    //   `,
    //   imgSrc: '',
    //   alt: 'Direct Messaging'
    // },
    // {
    //   id: 14,
    //   prompt: 'Countdown Timer',
    //   description: `
    //   <p>Coming Soon!</p>
    //   `,
    //   imgSrc: '',
    //   alt: 'Countdown Timer'
    // },
    // {
    //   id: 15,
    //   prompt: 'On/Off Switch',
    //   description: `
    //   <p>Coming Soon!</p>
    //   `,
    //   imgSrc: '',
    //   alt: 'On/Off Switch'
    // },
    // {
    //   id: 16,
    //   prompt: 'Pop-Up/Overlay',
    //   description: `
    //   <p>Coming Soon!</p>
    //   `,
    //   imgSrc: '',
    //   alt: 'Pop-Up/Overlay'
    // },
    // {
    //   id: 17,
    //   prompt: 'Email Receipt',
    //   description: `
    //   <p>Coming Soon!</p>
    //   `,
    //   imgSrc: '',
    //   alt: 'Email Receipt'
    // },
  ];

  constructor() { }

  ngOnInit() {
  }

}
