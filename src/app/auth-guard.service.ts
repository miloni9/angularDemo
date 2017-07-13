import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/observable";
import { DemoTaskService } from "./demo-task.service";

@Injectable()
export class AuthGuardService  {

  constructor(public _data:DemoTaskService) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean | Observable<boolean>|Promise<boolean>
  {
      return this._data.isAuthenticated();
  }


}
