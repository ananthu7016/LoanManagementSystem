import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-approval-details',
  templateUrl: './approval-details.component.html',
  styleUrls: ['./approval-details.component.scss']
})
export class ApprovalDetailsComponent implements OnInit {

  constructor(public service:AdminService) { }

  ngOnInit(): void {
  }


  //#region Approve Loan 
  ApproveLoan(){
 
    // so when this method is called we need to subscribe to the observable 

    this.service.ApproveLoan(this.service.selectedApprovalDetail)
    .subscribe((response)=>{
      console.log('This is the response that we get after subscribing to a Observable , the response is ',response);
    },
  (error)=>{
    console.log('The error we get after subscribing the observable to Approve a loan is ',error);
  })

  }
  //#endregion
}
