import { Component, OnInit } from '@angular/core';

interface User{
  name:string;
  email:string;
  password:string;
  designation:string;
  bio:string;
  terms:boolean
}

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public user:User={
    name:'',
    email:'',
    password:'',
    designation:'',
    bio:'',
    terms:false
  }

  public submitRegister(){
    console.log(this.user)
  }

}
