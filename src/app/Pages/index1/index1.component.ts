import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index1',
  templateUrl: './index1.component.html',
  styleUrls: ['./index1.component.css']
})
export class Index1Component implements OnInit {

  currentSection = 'home';

  /* @param sectionId specify the current sectionID
  */
  onSectionChange(sectionId: string): void {
    this.currentSection = sectionId;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleMenu() {

  }
}
