import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from "@angular/forms";
import { DemoTaskService } from "../../demo-task.service";

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styles: []
})
export class ProductaddComponent implements OnInit {

 myform:FormGroup;
  constructor(public _formBuilder:FormBuilder,public _service:DemoTaskService) { }

  ngOnInit() {
    this.myform=this._formBuilder.group(
      {
        'pimg':['',Validators.required],
        'pname':['',[Validators.required,Validators.minLength(5)]],
        'pprice':['',[Validators.required]],
        'soh':['',[Validators.required]]
      }
    );
  }
  onSubmit()
  {
    this._service.addProduct(this.myform.value).subscribe(
      ((data:Response)=>{ console.log("added"); })
    );
  }

}
