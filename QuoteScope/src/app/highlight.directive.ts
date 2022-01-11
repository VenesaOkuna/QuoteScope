import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})

// added yellow highlight to top voted quote
export class HighlightDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = '#ffdf65';
  }
}