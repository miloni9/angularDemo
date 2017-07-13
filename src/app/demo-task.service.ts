import { Injectable } from '@angular/core';
import { TaskData } from "../app/task-data";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';
import { Router } from "@angular/router";
declare var firebase: any;

@Injectable()
export class DemoTaskService {
  arr: TaskData[] = [
    new TaskData("1", "sfgsdf", "done"),
    new TaskData("2", "jhhjkhk", "pending")
  ];
  auth:boolean=false;
  furl: string = "https://mydemodata-3a80d.firebaseio.com/product_data.json/"
  url: string = "https://ngbackend.herokuapp.com/task/";
    durl: string = "https://ngbackend.herokuapp.com/deleteAll/";
vurl:string="https://booksnodes.herokuapp.com/book/";
  constructor(public _http: Http, public _router: Router) { }

//login auth
login()
{
  this.auth=true;
}
//login auth
logout()
{
  this.auth=false;
}

isAuthenticated()
{
  return this.auth;
}
//book vali service
  addBook(item){
    let body = JSON.stringify(item);
    console.log(body);
    let header = new Headers({ 'Content-Type': 'application/json' });
    let reqOption = new RequestOptions({ headers: header });

    return this._http.post(this.vurl, body, reqOption)
    .map((res: Response) => res.json());
  }


//delete all vali service

deleteAllTasks(item){
    let body = JSON.stringify(item);
    console.log(body);
    let header = new Headers({ 'Content-Type': 'application/json' });
    let reqOption = new RequestOptions({ headers: header });

    return this._http.post(this.durl, body, reqOption)
    .map((res: Response) => res.json());
  }

//firebase vali service

  getAllProduct() {
    return this._http.get(this.furl).map((res: Response) => res.json());
  }

  addProduct(item){
    let body = JSON.stringify(item);
    console.log(body);
    let header = new Headers({ 'Content-Type': 'application/json' });
    let reqOption = new RequestOptions({ headers: header });

    return this._http.post(this.furl, body, reqOption)
    .map((res: Response) => res.json());
  }

//login vali service
  signup(item) {

    firebase.auth().createUserWithEmailAndPassword(item.email, item.password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

  }
  signin(item) {
    var x = firebase.auth().signInWithEmailAndPassword(item.email, item.password)
      .then(function () {
        alert("login ");
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorMessage);
      });
  }

  signout() {
    firebase.auth().signOut();
    this._router.navigate(['DataBinding']);
    /*firebase.auth().signOut().then(function() {
    console.log("Sign-out successful");
    this._router.navigate(['DataBinding']);
  }).catch(function(error) {
    // An error happened.

  });*/
  }

//task vali service


  dataLavseBadha() {
    return this._http.get(this.url)
      .map((res: Response) => res.json());
  }
  dataLavse(id) {
    return this._http.get(this.url + id)
      .map((res: Response) => res.json());
  }
  dataUdavse(item) {
    let header = new Headers({ 'Content-Type': 'application/json' });
    let reqOption = new RequestOptions({ headers: header });
    return this._http.delete(this.url + item.id, reqOption)
      .map((res: Response) => res.json());
  }
  dataUmerse(item) {
    let body = JSON.stringify(item);
    let header = new Headers({ 'Content-Type': 'application/json' });
    let reqOption = new RequestOptions({ headers: header });
    return this._http.post(this.url, body, reqOption)
      .map((res: Response) => res.json());

  }
  dataBdlse(item) {
    let body = JSON.stringify(item);
    let header = new Headers({ 'Content-Type': 'application/json' });
    let reqOption = new RequestOptions({ headers: header });
    return this._http.put(this.url + item.id, body, reqOption)
      .map((res: Response) => res.json());
  }

  //local

  getAllTask() {

    return this.arr;
  }
  onDelete(i) {
    this.arr.splice(i, 1);
  }
  onUpdate(item) {
    if (item.Status == "done") {
      item.Status = "pending";
    }
    else {
      item.Status = "done";

    }
  }
  onAdd(model: TaskData) {
    this.arr.push(model);
  }
}
