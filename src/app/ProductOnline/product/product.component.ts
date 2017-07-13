import { Component, OnInit } from '@angular/core';
import { Produ } from "./produ";
import { DemoTaskService } from "../../demo-task.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',

  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
arr:Produ[]=[];
str:string="Watch";
  constructor(public _data:DemoTaskService) { }

  ngOnInit() {
    this._data.getAllProduct().subscribe(
    (data:any)=>{
      this.arr=data;
      console.log(data);
    }
    );
  }
  onClick(value:string)
  {
    if(value!=''){

     this.arr= this.arr.filter((res)=>res.pname.startsWith(value));
    }
    else
    {
       this._data.getAllProduct().subscribe(
    (data:any)=>{
      this.arr=data;
      console.log(data);
    }
    );
    }

  }
onKeyup(value:string)
{
if(value!=''){

     this.arr= this.arr.filter((res)=>res.pname.startsWith(value));
    }
    else
    {
       this._data.getAllProduct().subscribe(
    (data:any)=>{
      this.arr=data;
      console.log(data);
    }
    );
    }
}
}
