import { AddjobComponent } from './dashboard/employerdashboard/addjob/addjob.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MatSidenavModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatSortModule, MatPaginatorModule, MatCheckboxModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatSliderModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import {MatSnackBarModule} from '@angular/material';

import { approute } from './app.router';


import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';

import { EmployerbasicComponent } from './register/employer/employerbasic/employerbasic.component';
import { EmployerpersonalComponent } from './register/employer/employerpersonal/employerpersonal.component';
import { EmployerprofessionalComponent } from './register/employer/employerprofessional/employerprofessional.component';


import { StudentbasicComponent } from './register/student/studentbasic/studentbasic.component';
import { StudentpersonalComponent } from './register/student/studentpersonal/studentpersonal.component';
import { StudentprofessionalComponent } from './register/student/studentprofessional/studentprofessional.component';


import { CollegebasicComponent } from './register/college/collegebasic/collegebasic.component';
import { CollegeprofessionalComponent } from './register/college/collegeprofessional/collegeprofessional.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ForgotpasswordComponent } from './register/forgotpassword/forgotpassword.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';

import { EmployerdashboardComponent } from './dashboard/employerdashboard/employerdashboard.component';
import { DashboardheaderComponent } from './dashboard/dashboardheader/dashboardheader.component';
import { ApplicationsComponent } from './dashboard/employerdashboard/applications/applications.component';
import { CollegelistComponent } from './dashboard/employerdashboard/collegelist/collegelist.component';
import { StudentlistComponent } from './dashboard/employerdashboard/studentlist/studentlist.component';

import { StudentdashboardComponent } from './dashboard/studentdashboard/studentdashboard.component';
import { EmployerslistComponent } from './dashboard/studentdashboard/employerslist/employerslist.component';
import { JobslistComponent } from './dashboard/studentdashboard/jobslist/jobslist.component';

import { CollegedashboardComponent } from './dashboard/collegedashboard/collegedashboard.component';
import { StudentjoblistComponent } from './dashboard/collegedashboard/studentjoblist/studentjoblist.component';
import { StudentslistComponent } from './dashboard/collegedashboard/studentslist/studentslist.component';

import { AdmindashboardComponent } from './dashboard/admindashboard/admindashboard.component';
import { AdminApplicationsComponent } from './dashboard/admindashboard/admin-applications/admin-applications.component';
import { AdminStudentlistComponent } from './dashboard/admindashboard/admin-studentlist/admin-studentlist.component';
import { AdminJoblistComponent } from './dashboard/admindashboard/admin-joblist/admin-joblist.component';
import { AdminCollegelistComponent } from './dashboard/admindashboard/admin-collegelist/admin-collegelist.component';
import { ProfilepageComponent } from './dashboard/employerdashboard/profilepage/profilepage.component';
import { UserprofiledetailsComponent } from './dashboard/employerdashboard/profilepage/userprofiledetails/userprofiledetails.component';
import { AddcourseComponent } from './dashboard/collegedashboard/addcourse/addcourse.component';
import { JobinfoComponent } from './dashboard/studentdashboard/jobinfo/jobinfo.component';



@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    HomeComponent,
    FooterComponent,

    LoginComponent,

    RegisterComponent,


    EmployerbasicComponent,
    EmployerpersonalComponent,
    EmployerprofessionalComponent,

    StudentbasicComponent,
    StudentpersonalComponent,
    StudentprofessionalComponent,

    CollegebasicComponent,
    CollegeprofessionalComponent,
    SidenavComponent,
    ForgotpasswordComponent,
    SetpasswordComponent,
    EmployerdashboardComponent,
    DashboardheaderComponent,
    ApplicationsComponent,
    CollegelistComponent,
    StudentlistComponent,
    StudentdashboardComponent,
    EmployerslistComponent,
    JobslistComponent,
    CollegedashboardComponent,
    StudentjoblistComponent,
    StudentslistComponent,
    AddjobComponent,

    AdmindashboardComponent,
    AdminApplicationsComponent,
    AdminCollegelistComponent,
    AdminJoblistComponent,
    AdminStudentlistComponent,
    ProfilepageComponent,
    UserprofiledetailsComponent,
    AddcourseComponent,
    JobinfoComponent,
  
  ],
  imports: [
    BrowserModule, AngularFontAwesomeModule, BrowserAnimationsModule, FlexLayoutModule, approute
    , MatToolbarModule, FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatSidenavModule,
    MatSortModule, MatPaginatorModule, MatCheckboxModule, MatTableModule, MatSliderModule, MatButtonToggleModule, HttpModule
  ,MatSnackBarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
