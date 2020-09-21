import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router:Router
  ) {}
  
  ngOnInit() {
  }


  question1(){
    this.router.navigate(['que1'], {relativeTo: this.route});
  }
  question2(){
    this.router.navigate(['que2'], {relativeTo: this.route});
  }
  question3(){
    this.router.navigate(['que3'], {relativeTo: this.route});
  }
  question4(){
    this.router.navigate(['que4'], {relativeTo: this.route});
  }


}
