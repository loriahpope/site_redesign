import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  socialLinks = [
    {
      link: 'https://linkedin.com/in/loriahpope',
      text: 'LinkedIn'
    },
    {
      link: 'https://github.com/loriahpope',
      text: 'Github'
    },
    {
      link: 'https://medium.com/@loriahpope',
      text: 'Medium'
    },
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get subject() { return this.contactForm.get('subject').value; }
  get message() { return this.contactForm.get('message').value; }

  sendEmail() {
    if(this.contactForm.valid) {
      console.log(this.subject);
      console.log(this.message);
    }
  }

}
