import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficerRoutingModule } from './officer-routing.module';
import { OfficerComponent } from './officer.component';
import { VerificationListComponent } from './verification-list/verification-list.component';
import { FormsModule } from '@angular/forms';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  declarations: [OfficerComponent, VerificationListComponent],
  imports: [
    CommonModule,
    OfficerRoutingModule,
    FormsModule,
    NavbarModule
  ]
})
export class OfficerModule { }
