import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { OfficerComponent } from './officer/officer.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'login',component:LoginComponent,loadChildren: ()=>import('./login/login.module').then(l=> l.LoginModule)},
  {path:'customer',component:CustomerComponent,loadChildren: ()=>import('./customer/customer.module').then(c=>c.CustomerModule)},
  {path:'admin',component:AdminComponent,loadChildren:()=>import('./admin/admin.module').then(a=>a.AdminModule)},
  {path:'officer',component:OfficerComponent,loadChildren:()=>import('./officer/officer.module').then(o=>o.OfficerModule)},
  {path:'nav',component:NavbarComponent,loadChildren:()=>import('./navbar/navbar.module').then(n=>n.NavbarModule)},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
