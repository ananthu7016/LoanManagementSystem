import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';


@NgModule({
  declarations: [CustomerComponent, CustomerHomeComponent, ApplyLoanComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    MatSlideToggleModule
  ]
})
export class CustomerModule { }
