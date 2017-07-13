import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
@Input() title:string='miloni';
@Output() customKeyEvent=new EventEmitter<string>();
@Output() customEvent=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
onClick(str){
  this.customEvent.emit(str);
}
onKeyup(str)
{
  this.customKeyEvent.emit(str);
}
}
