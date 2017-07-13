import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { routerTask } from "./task.routing";
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskServiceComponent } from './task-service.component';
import { TaskaddComponent } from '../taskadd/taskadd.component';
import { SharedModule } from "../../shared/sharedmodule";

@NgModule({
  declarations:[
    TaskaddComponent,
    TaskFormComponent,
    TaskServiceComponent
  ],
  imports:[
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    routerTask
  ]
})
export class TaskModule {}
