import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalenderViewComponent} from './calender-view/calender-view.component';
import {CalenderDataComponent} from './calender-data/calender-data.component'; // CLI imports router

const routes: Routes = [
  {pathMatch: 'full', path: '', redirectTo: 'calender'},
  {path: 'calender', component: CalenderViewComponent},
  {path: 'data', component: CalenderDataComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
