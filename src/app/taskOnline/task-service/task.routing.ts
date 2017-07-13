import { Routes,RouterModule } from "@angular/router";

import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskServiceComponent } from './task-service.component';
import { TaskaddComponent } from '../taskadd/taskadd.component';

const routesTask:Routes=[
         {path:'AddData/:id',component:TaskaddComponent},
    {path:'',component:TaskServiceComponent},
    {path:'FormDemo',component:TaskFormComponent}
];

export const routerTask=RouterModule.forChild(routesTask);
