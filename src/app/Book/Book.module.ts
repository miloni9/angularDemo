import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { routerBook } from "./Book.routing";
import { FileuploadComponent } from './fileupload/fileupload.component';

@NgModule(
  {
    declarations:[
      FileuploadComponent
    ],
    imports:[
       FormsModule,
    ReactiveFormsModule,
    CommonModule,
    routerBook
    ]
  }
)
export class BookModule{}
