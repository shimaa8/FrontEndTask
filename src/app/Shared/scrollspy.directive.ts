import {Directive, ElementRef, HostListener, Inject, Input, Output} from '@angular/core';
// @ts-ignore
import EventEmitter = require('events');
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[appScrollspy]'
})
export class ScrollspyDirective {

  @Input() public spiedTags = [];
  // @ts-ignore
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection: string | undefined;

  // tslint:disable-next-line: variable-name
  constructor(private _el: ElementRef, @Inject(DOCUMENT) private document: Document) {
  }

  @HostListener('window:scroll', ['$event'])
  /**
   * Window scroll method
   */
  onScroll(event: any): void {
    let currentSection: string;
    const children = this._el.nativeElement.querySelectorAll('section');
    const scrollTop = this.document.documentElement.scrollTop;
    const parentOffset = this.document.documentElement.offsetTop;

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
        if ((element.offsetTop - parentOffset) <= scrollTop) {
          currentSection = element.id;
        }
      }
    }
    // @ts-ignore
    if (currentSection !== this.currentSection) {
      // @ts-ignore
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }

}
