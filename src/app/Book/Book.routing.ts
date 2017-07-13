import { Routes,RouterModule } from "@angular/router";
import { FileuploadComponent } from "./fileupload/fileupload.component";
  const routesBook:Routes=[
  {path:'fileupload',component:FileuploadComponent}
];

export const routerBook=RouterModule.forChild(routesBook);
