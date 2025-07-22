import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public tourName:string='Paris';

  public tourImage:string="https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg"

  public time:string =new Date().toLocaleTimeString();
  constructor() { 
    this.updateTime()
  }

  ngOnInit(): void {
  }
  public getDate():string{
    return new Date().toDateString();
  }

  /**
   * getTime
 :string  */
  public updateTime() {
    setInterval(()=>{
      this.time=new Date().toLocaleTimeString();
    },1000);
  }

}
