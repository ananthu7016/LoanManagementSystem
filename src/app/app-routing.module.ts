import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'login',component:LoginComponent,loadChildren: ()=>import('./login/login.module').then(x=> x.LoginModule)},
  {path:'customer',component:CustomerComponent,loadChildren: ()=>import('./customer/customer.module').then(x=>x.CustomerModule)},
  {path:'admin',component:AdminComponent,loadChildren:()=>import('./admin/admin.module').then(x=>x.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
