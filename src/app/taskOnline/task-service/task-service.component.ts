import { Component, OnInit, OnDestroy } from '@angular/core';
import { DemoTaskService } from "../../demo-task.service";
import { TaskData } from "../../task-data";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AnonymousSubscription } from "rxjs/Subscription";

@Component({
  selector: 'app-task-service',
  templateUrl: './task-service.component.html',
  styles: []
})
export class TaskServiceComponent implements OnInit {
  postSubscription: AnonymousSubscription;
  timerSubscription: AnonymousSubscription;
  dt = new Date(2017, 5, 7);
  object: Object = { foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
  constructor(public _tsk: DemoTaskService, public _router: Router) { }
  arr: TaskData[] = [];

  ngOnInit() {
    //this.arr=this._tsk.getAllTask();
    this.refreshData();
  }
  public ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
  subscribeToData() {
    this.timerSubscription = Observable.timer(5000).subscribe(
      () => this.refreshData()
    );
  }
  refreshData() {

    this.postSubscription = this._tsk.dataLavseBadha().subscribe(
      (data: TaskData[]) => {
        this.arr = data;
        this.subscribeToData();
      },
      function (error) {
        console.log(error);
      },
      function () {
        console.log("badhu puru");
      }
    );
  }
  onDelete(i) {
    this._tsk.dataUdavse(i).subscribe(
      (data: any) => {
        this.arr.splice(this.arr.indexOf(i), 1);
      },
      function (error) {
        console.log(error);
      },
      function () {
        console.log("done");
      }
    );
  }
  onUpdate(item) {
    // this._tsk.onUpdate(item);

    this._router.navigate(['AddData', item.id]);
  }
  delArr: TaskData[] = [];
  selected(item: TaskData) {
    if (this.delArr.find(data => data === item)) {
      this.delArr.splice(this.delArr.indexOf(item), 1);
    }
    else {
      this.delArr.push(item);
    }
  }
  i: number = 0;
  onDeleteAll() {
    this._tsk.deleteAllTasks(this.delArr)
      .subscribe(
      (data: any) => {
        for (this.i = 0; this.i < this.delArr.length; this.i++) {
          if (this.arr.find(x => x === this.delArr[this.i])) {
            this.arr.splice(this.arr.indexOf(this.delArr[this.i], 1));
          }
        }
      }
      );
  }

}
