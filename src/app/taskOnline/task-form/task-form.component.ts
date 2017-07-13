import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from "@angular/forms";
import { DemoTaskService } from "../../demo-task.service";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
myform:FormGroup;
  constructor(public _formBuilder:FormBuilder,public _service:DemoTaskService) { }

  ngOnInit() {
    this.myform=this._formBuilder.group(
      {
        'id':['',Validators.required],
        'title':['',[Validators.required,Validators.minLength(5)]],
        'status':['',[Validators.required,this.statusValidator]]
      }
    );
  }
  onSubmit()
  {
    this._service.dataUmerse(this.myform.value).subscribe(
      ((data:Response)=>{ console.log("added"); })
    );
  }
  statusValidator(control:FormControl):{[s:string]:boolean}
  {
    if(control.value==="done")
    {
      return null;
    }
    else if(control.value==="pending")
    {
      return null;
    }
    return {done:true};
  }

}
