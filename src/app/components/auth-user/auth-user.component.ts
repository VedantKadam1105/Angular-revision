import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent implements OnInit {
  public isLoggedIn:boolean=false;

  setIsLoggedIn(flag:boolean){
    this.isLoggedIn=flag
  }

  constructor() { }

  ngOnInit(): void {
  }

}
