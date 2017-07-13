import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { DemoComponent } from "./ofline/demo/demo.component";
import { TasksComponent } from "./ofline/tasks/tasks.component";
import { MoklisuComponent } from "./moklisu/moklisu.component";
import { LaisuComponent } from "./laisu/laisu.component";
import { AuthGuardService } from "./auth-guard.service";

const routes: Routes = [
  { path: '', redirectTo: '/allTasks', pathMatch: 'full' },
  { path: 'allTasks', component: TasksComponent },
  { path: 'DataBinding',canActivate:[AuthGuardService],component: DemoComponent },
  { path: 'moklo', component: MoklisuComponent },
  { path: 'laisu', component: LaisuComponent },
  { path: 'ServicesDemo', loadChildren:'./taskOnline/task-service/task.module#TaskModule' },
{path:'signup',loadChildren:'./FirebaseDemo/firebase.module#firebaseModule'},
{path:'product',loadChildren:'./ProductOnline/product/product.module#ProductModule'}
];

export const router = RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules,useHash:true});
