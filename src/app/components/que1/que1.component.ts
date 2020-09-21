import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que1',
  templateUrl: './que1.component.html',
  styleUrls: ['./que1.component.css']
})
export class Que1Component implements OnInit {

  selected;
  constructor() { }

  ngOnInit() {
  }

  homeClick(){
    this.selected="home";
  }

  projectsClick(){
    this.selected="projects";
  }

  servicesClick(){
    this.selected="services";
  }

  contactClick(){
    this.selected="contact";
  }

}
