import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-laisu',
  templateUrl: './laisu.component.html',
  styles: []
})
export class LaisuComponent implements OnInit {

  constructor(public _activeRouter:ActivatedRoute) {

   }

  ngOnInit() {
    console.log(this._activeRouter.snapshot.queryParams['id']);
        console.log(this._activeRouter.snapshot.queryParams['name']);
                console.log(this._activeRouter.snapshot.fragment);

}

}
