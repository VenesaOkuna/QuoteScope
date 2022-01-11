import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css'],
})
export class QuotesFormComponent implements OnInit {
  newQuote = new Quote(2, '', '', '', '', new Date(), 0, 0);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote(2, '', '', '', '', new Date(), 0, 0);
    alert('Quote submitted');
  }

  constructor() {}

  ngOnInit(): void {}
}