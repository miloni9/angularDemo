import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { routerFirebase } from "./firebase.routing";
import { LoginComponent } from './login/login.component';

@NgModule(
  {
    declarations:[
          LoginComponent,

    ],
    imports:[
      FormsModule,
    ReactiveFormsModule,
    CommonModule,
    routerFirebase
    ]
  }
)
export class firebaseModule{}
