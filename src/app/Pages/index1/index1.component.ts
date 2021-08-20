import {Component, HostListener, OnInit} from '@angular/core';
import {$} from 'protractor';

@Component({
  selector: 'app-index1',
  templateUrl: './index1.component.html',
  styleUrls: ['./index1.component.css']
})
export class Index1Component implements OnInit {

  currentSection = 'home';
  private _event: any;

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  @HostListener('window:scroll', ['$event']) // for window scroll events

  onSectionChange(sectionId: string): void {
    this.currentSection = sectionId;
  }

  constructor() {

  }


  ngOnInit(): void {
  }

  toggleMenu() {

  }

  // tslint:disable-next-line:typedef
  onScroll(event: any) {
    console.log(event);
  }
}


