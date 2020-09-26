import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que2',
  templateUrl: './que2.component.html',
  styleUrls: ['./que2.component.css']
})
export class Que2Component implements OnInit {

  paragraph:String="Please hover to change the text";
  visible:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  edit(){
    this.visible=true;
  }

}
