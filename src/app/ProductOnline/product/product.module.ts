import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
//import { HttpModule } from "@angular/http";
import { routerProduct } from "./product.routing";
import { ProductComponent } from "./product.component";
import { ProductaddComponent } from "./productadd.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { FilterPipe } from "../../filter.pipe";

@NgModule({
  declarations:[
    ProductaddComponent,
    ProductComponent,
    FilterPipe,
    SidebarComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routerProduct
  ]
})
export class ProductModule{}
