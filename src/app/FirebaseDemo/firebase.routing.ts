import { Routes,RouterModule } from "@angular/router";


import { LoginComponent } from './login/login.component';
const routesFirebase:Routes=[
            {path:'',component:LoginComponent}


];

export const routerFirebase=RouterModule.forChild(routesFirebase);
