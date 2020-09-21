import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que4',
  templateUrl: './que4.component.html',
  styleUrls: ['./que4.component.css']
})
export class Que4Component implements OnInit {

  list = [];
  newTodoValue;
  selectedItem;
  indexes=[];
  constructor() { }

  ngOnInit() {
    this.list = ["angular", "react"];
  }

  add() {
    if(this.newTodoValue!=null){
      this.list.push(this.newTodoValue);
    }
    else{
      alert("please! enter something");
    }
  }

  selected(event) {
    this.selectedItem = event.target.value;
    this.indexes.push(this.list.findIndex(x=>x==this.selectedItem));
    console.log(this.indexes);
  }

  remove() {
    if(this.selectedItem!=null){
      this.list.splice(0,this.indexes.length);
    }
    else{
      alert("please select at least one item");
    }
  }
}
