import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que3',
  templateUrl: './que3.component.html',
  styleUrls: ['./que3.component.css']
})
export class Que3Component implements OnInit {

  list = [
    { name: "Web_development", price: 100 },
    { name: "design", price: 100 },
    { name: "integration", price: 100 },
    { name: "training", price: 100 }
  ];
  total: Number = 0;
  item_list: Number[] = [];
  success: boolean = false;
  constructor() { }

  ngOnInit() {

  }

  onchange(event) {
    if (event.target.checked == true) {
      this.item_list.push(event.target.value);
      this.total = this.item_list.reduce((a, b) => {
        const c = Number(a) + Number(b);
        return c;
      });
    }
    else {
      let index = this.item_list.findIndex(x => x == event.target.value);
      this.total = this.item_list.reduce((a, b) => {
        const c = Number(this.total) - Number(this.item_list[index]);
        return c;
      });
      this.item_list.splice(index, 1);
      if (this.item_list.length == 0) {
        this.total = 0;
      }
    }
  }


}
