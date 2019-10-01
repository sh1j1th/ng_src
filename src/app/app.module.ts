import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BarRatingModule } from "ngx-bar-rating";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { MentorLoginComponent } from './components/mentor-login/mentor-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MentorDashboardComponent } from './components/mentor-dashboard/mentor-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    CoursesComponent,
    AdminLoginComponent,
    MentorLoginComponent,
    AdminDashboardComponent,
    MentorDashboardComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BarRatingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
