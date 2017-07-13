import { Routes,RouterModule } from "@angular/router";

import { ProductComponent } from "./product.component";
import { ProductaddComponent } from "./productadd.component";

const routesProduct:Routes=[
      {path:'',component:ProductComponent},
      {path:'Addproduct',component:ProductaddComponent}
];

export const routerProduct=RouterModule.forChild(routesProduct);
