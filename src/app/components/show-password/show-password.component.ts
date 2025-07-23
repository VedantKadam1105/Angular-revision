import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.css']
})
export class ShowPasswordComponent implements OnInit {


  public inputType:string= 'password'
  constructor() { }

  ngOnInit(): void {
  }
  public showPassword(event:any){
    
    if(event.target.checked){
      console.log("called")
      this.inputType='text'
    }
    else{
      this.inputType='password'
    }
  }
  

}
