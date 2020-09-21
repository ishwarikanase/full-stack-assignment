import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Que1Component } from './components/que1/que1.component';
import { Que2Component } from './components/que2/que2.component';
import { Que3Component } from './components/que3/que3.component';
import { Que4Component } from './components/que4/que4.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'que1', component: Que1Component },
      { path: 'que2', component: Que2Component },
      { path: 'que3', component: Que3Component },
      { path: 'que4', component: Que4Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
