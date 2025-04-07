import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; // ✅ import this!
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FormsModule], // ✅ make sure it's here!
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: '<router-outlet></router-outlet>',
  // declarations: [
  //   AppComponent,
  //   DashboardComponent
  // ],
})
export class AppComponent {
  title = 'mealPlanner';
}
