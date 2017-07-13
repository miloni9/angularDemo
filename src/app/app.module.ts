import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { PaginatePipe } from "./ng2paging/paginate.pipe";
import { PaginationControlsComponent } from "./ng2paging/pagination-controls.component";
import { PaginationControlsDirective } from "./ng2paging/pagination-controls.directive";
import { PaginationService } from "./ng2paging/pagination.service";
import { PaginationInstance } from "./ng2paging/pagination-instance";

import { AppComponent } from './app.component';
import { DemoComponent } from './ofline/demo/demo.component';
import { TasksComponent } from './ofline/tasks/tasks.component';
import { HeaderComponent } from './header.component';
import { router } from "./app-routing";
import { DemoTaskService } from "./demo-task.service";
import { AuthGuardService } from "./auth-guard.service";

import { BookModule } from "./Book/Book.module";
import { HilighterDirectiveDirective } from './hilighter-directive.directive';
import { MoklisuComponent } from './moklisu/moklisu.component';
import { LaisuComponent } from './laisu/laisu.component';
import { SharedModule } from "./shared/sharedmodule";


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TasksComponent,
    HeaderComponent,
    HilighterDirectiveDirective,
    MoklisuComponent,
    LaisuComponent,
    PaginatePipe,
    PaginationControlsComponent,
    PaginationControlsDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    BookModule,
    ReactiveFormsModule,
    router

  ],
  providers: [DemoTaskService,AuthGuardService,PaginationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
