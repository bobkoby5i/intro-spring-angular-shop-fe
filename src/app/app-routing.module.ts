import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './components/user/home/home.component';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {DetailComponent} from './components/user/detail/detail.component';
import {DashboardComponent} from './components/admin/dashboard/dashboard.component';
import {UserListComponent} from './components/admin/user-list/user-list.component';
import {ProductListComponent} from './components/admin/product-list/product-list.component';
import {UnauthorizedComponent} from './components/error/unauthorized/unauthorized.component';
import {NotFoundComponent} from './components/error/not-found/not-found.component';

const routes: Routes = [
    //Main page
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home',      component: HomeComponent},
    //User pages
    {path: 'login',     component: LoginComponent},
    {path: 'register',  component: RegisterComponent},
    {path: 'profile',   component: ProfileComponent},
    {path: 'detail', component: DetailComponent},
    {path: 'detail/:id', component: DetailComponent},

  //admin panel
  {path: 'dashboard',   component: DashboardComponent  },
  {path: 'user-list',   component: UserListComponent },    
  {path: 'product-list',   component: ProductListComponent  },  

  //error pages
  {path: '404', component: NotFoundComponent},
  {path: '401', component: UnauthorizedComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
