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
  checked:boolean=false;
  indexes = [];
  constructor() { }

  ngOnInit() {
    this.list = ["angular", "react", "node", "a", "b", "c", "d"];
  }

  add() {
    if (this.newTodoValue != null) {
      this.list.push(this.newTodoValue);
    }
    else {
      alert("please! enter something");
    }
  }

  selected(event) {
    this.selectedItem = event.target.value;
    this.checked=event.target.checked;
    if (!this.indexes.includes(this.list.findIndex(x => x == this.selectedItem)) && this.checked) {
      this.indexes.push(this.list.findIndex(x => x == this.selectedItem));
    }
    if (!this.checked && this.indexes.includes(this.list.findIndex(x => x == this.selectedItem))) {
      this.indexes.splice(this.list.findIndex(x => x == this.selectedItem), 1);
    }
  }

  remove() {
    if (this.indexes.length != 0 && this.checked) {
      this.indexes.sort();
      this.indexes.reverse();
      this.indexes.map(x => {
        this.list.splice(x, 1);
      });
      this.indexes=[];
    }
    if(this.indexes.length == 0 && !this.checked){
      alert("please select at least one item");
    }
  }
}
