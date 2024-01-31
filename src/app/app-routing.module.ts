import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { HomeComponent } from './pages/home/home.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { AuthGuard } from './auth.guard';
import { DepartmentFormComponent } from './pages/department-form/department-form.component';
import { DepartmentsTypesComponent } from './pages/departments-types/departments-types.component';
import { DepartmentTypeFormComponent } from './pages/department-type-form/department-type-form.component';


const routes: Routes = [
  {
    path:'',
    component: LoadingComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'admin/:departmentType',
    component: AdministrationComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'admin',
    component: AdministrationComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'department/:idDepartment',
    component: DepartmentFormComponent,
  },
  {
    path: 'departmentsTypes',
    children: [
      {
        path: '',
        component: DepartmentsTypesComponent
      },
      {
        path: 'nouveau',
        component: DepartmentTypeFormComponent
      },
      {
        path: ':id',
        component: DepartmentTypeFormComponent
      },
    ]
  },
  {
    path:'**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
