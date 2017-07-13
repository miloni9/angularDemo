import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

str:string="welcome";
no1:number;
no2:number;
ans:number=0;
input1:number=0;
input2:number=0;
sum:number=0;
  constructor() { }

  ngOnInit() {
  }

  onAdd()
  {
    this.sum=this.no1+this.no2;
  }
  onSum(n1:string,n2:string)
  {
    this.input1=parseInt(n1.toString());
    this.input2=parseInt(n2.toString());
   this.ans=this.input1+this.input2;
  }
}
