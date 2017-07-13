import { Component, OnInit } from '@angular/core';
import { DemoTaskService } from "../../demo-task.service";
import {TaskData  } from "../../task-data";
import { Router,ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-taskadd',
  templateUrl: './taskadd.component.html',
  styles: []
})
export class TaskaddComponent implements OnInit {
  status = ['pending','done'];

model={'id':'','title':'','status':''};
tid:string;
private subscription:Subscription;
arr:TaskData[]=[];

  constructor(public _tsk:DemoTaskService,public _router:Router,public _activerouter:ActivatedRoute) {
    this.subscription=this._activerouter.params.subscribe(
      (param:any)=>{
        this.tid=param['id'];
      }
    );
    //this._activerouter.snapshot.queryParams['id'];
  }

  onSubmit()
  {
    if(this.tid=="0")
    {
      this._tsk.dataUmerse(this.model).subscribe(
        (data:any)=>{
          this.arr.push(this.model);
          this.model.id='';
          this.model.title='';
          this.model.status='';
          alert("thai gayu");
        },
      function(error){
        console.log(error);
      },
      function()
      {
        console.log("badhu puru");
      }

      );
    }
    else
    {
      this._tsk.dataBdlse(this.model).subscribe(
        (data:any)=>{
       this._router.navigate(["ServicesDemo"]);
        },
      function(error){
        console.log(error);
      },
      function()
      {
        console.log("badhu puru");
      }

      );

    }
  //  this._tsk.onAdd(this.model);
  //  this._router.navigate(["/allTasks"])
  }
  ngOnInit() {
            console.log(this.tid);

            if(this.tid!="0")
            {
                this._tsk.dataLavse(this.tid).subscribe(
                  (data:TaskData[])=>{
                    this.arr=data;
                    this.model=this.arr[0];
                  }
                );
            }

    //this.arr=this._tsk.getAllTask();
   /* this._tsk.dataLavseBadha().subscribe(
      (data:TaskData[])=>{
        this.arr=data;
      },
      function(error){
        console.log(error);
      },
      function()
      {
        console.log("badhu puru");
      }
    );*/
  }


}
