import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RequestListComponent } from './request-list/request-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdminComponent, RequestListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }

