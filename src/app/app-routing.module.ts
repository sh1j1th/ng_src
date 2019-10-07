import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { MentorDashboardComponent } from './components/mentor-dashboard/mentor-dashboard.component';
import { MentorLoginComponent } from './components/mentor-login/mentor-login.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { UsersCrudComponent } from './components/users-crud/users-crud.component';
import { CourseCrudComponent } from './components/course-crud/course-crud.component';
import { MentorsCrudComponent } from './components/mentors-crud/mentors-crud.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mentorlogin', component: MentorLoginComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'courses', component: CoursesComponent},
  { path: 'admindashboard', component: AdminDashboardComponent,
children:[
  { path: 'listusers', component: UsersCrudComponent },
  { path: 'listcourses', component: CourseCrudComponent }
] 
},
  { path: 'userdashboard', component: UserDashboardComponent},
  { path: 'mentordashboard', component: MentorDashboardComponent},
  { path: 'listusers', component: UsersCrudComponent },
  { path: 'listmentors', component: MentorsCrudComponent },
  { path: 'listcourses', component: CourseCrudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
