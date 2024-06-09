import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RequestListComponent } from './request-list/request-list.component';
import { FormsModule } from '@angular/forms';
import { ApprovalListComponent } from './approval-list/approval-list.component';
import { ApprovalDetailsComponent } from './approval-details/approval-details.component';


@NgModule({
  declarations: [AdminComponent, RequestListComponent, ApprovalListComponent, ApprovalDetailsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }

