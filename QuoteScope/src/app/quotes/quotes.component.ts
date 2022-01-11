import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  prelike: number = 0;
  afterlike: number = 0;

  // quotes listed
  quotes: Quote[] = [
    
    new Quote(
      1,' Hardships','Never a Rose without Thorns','uknown','Alice',new Date(),0,0),

  
    new Quote(
      2,'Programming','Computers are fast, programmers keep it slow.','ElyeProj','Ali',new Date(),0,0),
      

    new Quote(
      3,'Softwares','Software and cathedrals are much the same — first we build them, then we pray','reddit user','Sandra',new Date(),0,0),
      

    new Quote(
      4,'Life','I always wanted to be somebody, but now I realize I should have been more specific.','Lily Tomlin','Ken',new Date(),0,0),
      
 
    new Quote(
      5,'Luck','Luck is what you have left over after you give 100 percent.','Langston Coleman','Linda',new Date(),0,0),
      
  
    new Quote(
      6,'Wit','A person with a sharp tongue will eventually cut themselves.','J.Robson Koenig', 'Ness',new Date(),0,0),
      

    new Quote(
      7,'Pretending','Pretending to care what men think is an art. It takes moments to learn, but lifetimes to master. Id like to believe Im an expert.','Dennis Sharpe','Sandra', new Date(),0,0),
      
  
    new Quote(
      8,'Awareness','The important thing to remember is not to forget.','Benny Bellamacina','Hellen',new Date(),0,0)
      
  ];
  

  // load quotes
  showMore(index: any) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  
  // delete quotes
  deleteQuotes(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        ` delete ${this.quotes[index].name}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}

  // push new quote
  addQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }

  // like

  upVote(index: any) {
    this.quotes[index].upVote++;
  }

  // dislike
  downVote(index: any) {
    this.quotes[index].downVote++;
  }

  // get quote with highest votes
  highestVotes() {
    for (let i = 0; i < this.quotes.length; i++) {
      this.prelike = this.quotes[i].upVote;
      this.prelike > this.afterlike ? (this.afterlike = this.prelike) : false;
    }
    return this.afterlike;
  }
}