import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  username = "";
  email = "";
  password = "";
  users=[{ Username : "Example" , Email : "example@gmail.com" , Password : "m123"}]
  created=false;
  constructor(){
  }
  addUser(){
    this.users.push({Username : this.username , Email : this.email , Password : this.password});
    this.created=true;
  }

}
