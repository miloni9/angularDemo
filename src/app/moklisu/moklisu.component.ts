import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DemoTaskService } from "../demo-task.service";

@Component({
  selector: 'app-moklisu',
  templateUrl: './moklisu.component.html',
  styles: []
})
export class MoklisuComponent implements OnInit {


  constructor(public _router:Router,public _data:DemoTaskService) { }


  onLogout()
  {
    this._data.logout();
    alert("Logout successfully");
  }
  onLogin()
  {
    this._data.login();
    alert("Login successfully");
  }
  ngOnInit() {
  }
  onClick()
  {
    this._router.navigate(['/laisu'],{queryParams:{id:5,name:'miloni'},fragment:'jinansh'});
  }
}
