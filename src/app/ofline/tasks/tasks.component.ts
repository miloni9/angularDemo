import { Component, OnInit } from '@angular/core';
import {Task} from './Task';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

model={'Id':'','Title':'','Status':''};

  arr:Task[]=[

    new Task('T1','Class','pending'),
    new Task('T2','Shopping','pending'),

    new Task('T3','Sleeping','done'),
    new Task('T1','Class','pending'),
    new Task('T2','Shopping','pending'),

    new Task('T3','Sleeping','done'),
    new Task('T1','Class','pending'),
    new Task('T2','Shopping','pending'),

    new Task('T3','Sleeping','done'),
    new Task('T1','Class','pending'),
    new Task('T2','Shopping','pending'),

    new Task('T3','Sleeping','done'),
    new Task('T1','Class','pending'),
    new Task('T2','Shopping','pending'),

    new Task('T3','Sleeping','done')
  ];
onUpdate(item)
{
  if(item.Status=='done')
  {
    item.Status='pending';
  }
  else
  {
        item.Status='done';

  }
}
onDelete(i)
{
  this.arr.splice(i,1);
}
onSubmit()
{
    this.arr.push(this.model);

}
  constructor() { }
  ngOnInit() {
  }

}
