import { AdminCollegelistComponent } from './dashboard/admindashboard/admin-collegelist/admin-collegelist.component';
import { AdminStudentlistComponent } from './dashboard/admindashboard/admin-studentlist/admin-studentlist.component';
import { AdminJoblistComponent } from './dashboard/admindashboard/admin-joblist/admin-joblist.component';
import { AdminApplicationsComponent } from './dashboard/admindashboard/admin-applications/admin-applications.component';
import { AdmindashboardComponent } from './dashboard/admindashboard/admindashboard.component';
import { DashboardheaderComponent } from './dashboard/dashboardheader/dashboardheader.component';
import { StudentlistComponent } from './dashboard/employerdashboard/studentlist/studentlist.component';
import { CollegelistComponent } from './dashboard/employerdashboard/collegelist/collegelist.component';
import { ApplicationsComponent } from './dashboard/employerdashboard/applications/applications.component';

import { EmployerdashboardComponent } from './dashboard/employerdashboard/employerdashboard.component';


import { ForgotpasswordComponent } from './register/forgotpassword/forgotpassword.component';

import { CollegeprofessionalComponent } from './register/college/collegeprofessional/collegeprofessional.component';
import { CollegebasicComponent } from './register/college/collegebasic/collegebasic.component';

import { StudentprofessionalComponent } from './register/student/studentprofessional/studentprofessional.component';
import { StudentbasicComponent } from './register/student/studentbasic/studentbasic.component';
import { StudentpersonalComponent } from './register/student/studentpersonal/studentpersonal.component';

import { EmployerprofessionalComponent } from './register/employer/employerprofessional/employerprofessional.component';
import { EmployerpersonalComponent } from './register/employer/employerpersonal/employerpersonal.component';
import { EmployerbasicComponent } from './register/employer/employerbasic/employerbasic.component';

import { LoginComponent } from './login/login.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RegisterComponent } from "./register/register.component";

import { StudentdashboardComponent } from './dashboard/studentdashboard/studentdashboard.component';
import { EmployerslistComponent } from './dashboard/studentdashboard/employerslist/employerslist.component';
import { JobslistComponent } from './dashboard/studentdashboard/jobslist/jobslist.component';

import { CollegedashboardComponent } from './dashboard/collegedashboard/collegedashboard.component';
import { StudentjoblistComponent } from './dashboard/collegedashboard/studentjoblist/studentjoblist.component';
import { StudentslistComponent } from './dashboard/collegedashboard/studentslist/studentslist.component';
export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    {
        path: "home", component: HeaderComponent, children: [


            { path: "", redirectTo: "login", pathMatch: "full" },
            { path: "login", component: LoginComponent },
            { path: "register", component: RegisterComponent },

            { path: "register/employer", component: EmployerbasicComponent },
            { path: "register/employer/employerPersonal", component: EmployerpersonalComponent },
            { path: "register/employer/employerPersonal/employerProfessional", component: EmployerprofessionalComponent },


            { path: "register/student", component: StudentbasicComponent },
            { path: "register/student/studentPersonal", component: StudentpersonalComponent },
            { path: "register/student/studentPersonal/studentProfessional", component: StudentprofessionalComponent },


            { path: "register/college", component: CollegebasicComponent },
            { path: "register/college/collegeProfessional", component: CollegeprofessionalComponent },

            { path: "login/forgotpassword", component: ForgotpasswordComponent },

        ]
    },


    {
        path: "admin", component: AdmindashboardComponent,
        children: [
            { path: "", redirectTo: "applications", pathMatch: "full" },
            { path: "applications", component: AdminApplicationsComponent },
            { path: "collegelist", component: AdminCollegelistComponent },
            { path: "studentlist", component: AdminStudentlistComponent },
            { path: "joblist", component: AdminJoblistComponent }
        ]
    },
    {
        path: "employer", component: EmployerdashboardComponent,
        children: [
            { path: "", redirectTo: "applications", pathMatch: "full" },
            { path: "applications", component: ApplicationsComponent },
            { path: "collegelist", component: CollegelistComponent },
            { path: "studentlist", component: StudentlistComponent }
        ]
    },
    {
        path: "student", component: StudentdashboardComponent, children: [
            { path: "", redirectTo: "employerslist", pathMatch: "full" },
            { path: "employerslist", component: EmployerslistComponent },
            { path: "jobslist", component: JobslistComponent }
        ]
    },
    {
        path: "college", component: CollegedashboardComponent, children: [
            { path: "", redirectTo: "studentslist", pathMatch: "full" },
            { path: "studentslist", component: StudentslistComponent },
            { path: "jobslist", component: StudentjoblistComponent }
        ]
    }
];

export const approute: ModuleWithProviders = RouterModule.forRoot(routes);