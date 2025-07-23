import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-app',
  templateUrl: './sms-app.component.html',
  styleUrls: ['./sms-app.component.css']
})
export class SmsAppComponent implements OnInit {


  public maxlength:number=200;
  constructor() { }
  public message:string='';
  ngOnInit(): void {
  }

}
