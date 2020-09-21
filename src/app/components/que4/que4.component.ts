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
    this.list = ["angular", "react","node"];
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
    this.indexes.sort();
    this.indexes.reverse();
    console.log(this.indexes);
  }

  remove() {
    if(this.selectedItem!=null){
      // this.list.splice(this.indexes.reduce(x=>x),this.indexes.length);
      this.indexes.map(x=>{
        console.log(this.list.splice(x,1));
      })
    }
    else{
      alert("please select at least one item");
    }
  }
}
