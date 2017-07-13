import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { DemoTaskService } from "../../demo-task.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform: FormGroup
  constructor(public _formBuilder: FormBuilder, public _service: DemoTaskService) { }

  ngOnInit() {
    this.myform = this._formBuilder.group(
      {
        'email': ['', [Validators.required,Validators.minLength(5)]],
        'password': ['', [Validators.required, Validators.minLength(5)]]
      }
    );
  }
  onLogin()
  {
        this._service.signin(this.myform.value);

  }

onSubmit()
  {
    this._service.signup(this.myform.value);

  }
}
