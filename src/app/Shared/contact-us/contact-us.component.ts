import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  constructor() { }

  ngOnInit(): void {
  }

}
