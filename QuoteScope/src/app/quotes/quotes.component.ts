import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  title = 'QuoteScope';
  quotes:Quote[] = [
    new Quote (1,'Alice',' Hardships','Never a Rose without Thorns','Uknown', new Date(2022,7,12),0,0),
    new Quote (2,'Ali','Programming','Computers are fast, programmers keep it slow.','ElyeProj',new Date(2022,7,14),0,0),
    new Quote (3,'Grace','Softwares','Software and cathedrals are much the same — first we build them, then we pray.','reddit user',new Date(2022,6,3),0,0),
    new Quote (4,'Ken','Life','I always wanted to be somebody, but now I realize I should have been more specific.','Lily Tomlin',new Date(2022,7,7),0,0),
    new Quote (5,'Linda','Luck','Luck is what you have left over after you give 100 percent.','Langston Coleman',new Date(2022,7,17),0,0),
    new Quote (6,'Ness','Wit','A person with a sharp tongue will eventually cut themselves.','J.Robson Koenig',new Date(2022,7,15),0,0)
    new Quote (7,'Brian','Pretending','Pretending to care what men think is an art. It takes moments to learn, but lifetimes to master. Id like to believe Im an expert.','Dennis Sharpe',new Date(2022,7,17),0,0),
    new Quote (8,'Hellen','Awareness','The important thing to remember is not to forget.','Benny Bellamacina',new Date(2022,7,15),0,0)
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
