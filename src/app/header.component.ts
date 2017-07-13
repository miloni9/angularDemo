import { Component, OnInit } from '@angular/core';
import { DemoTaskService } from "./demo-task.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public _http:DemoTaskService) { }

  ngOnInit() {
  }
signout()
{
  this._http.signout();
}
}
