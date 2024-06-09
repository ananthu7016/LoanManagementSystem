import { Component, OnInit } from '@angular/core';
import { LoanRequest } from 'src/app/shared/model/loan-request';
import { AssignOfficer } from 'src/app/shared/model/assign-officer';
import { AdminService } from 'src/app/shared/service/admin.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {

  constructor(public service: AdminService) { }

  ngOnInit(): void {

    console.log('Calling the method to get all the details of the Loan Requests');
    this.service.GetDetailsOfAllLoanRequest();
    console.log('Calling the method to get all the details of Officers of DropDown');
    this.service.GetDetailsOfAllOfficer();

  }


  //#region Detailed of the Request
  detailsOfRequest: LoanRequest = new LoanRequest();
  showDetailedRequest(details: LoanRequest) {

    console.log('The details button has been clicked and the details of the loan to show is ', details);

    // then we need to store it to a local instace
    this.detailsOfRequest = details;

    // then we need hide the component which displays the details of Approval
    this.service.showApprovalToggle = false;

    // then we need to show the details of Request 
    this.service.showRequestDetailsToogle = true;


  }

  //#endregion


  //#region  Assign a Verification Officer 

  //first we need to define a Instace to Model Bind
  detailsToAssignOfficer: AssignOfficer = new AssignOfficer();

  AssignOfficerForVerification() {

    this.detailsToAssignOfficer.requestId = this.detailsOfRequest.requestId;
    // this will assign the Request Id which was in the Detail of The customer to the Form Details

    // then rest of the Details will be Model Binded
    console.log('The Request Recieved From the Form is ', this.detailsToAssignOfficer);

    // then with this details we need to subscribe to a observable

    this.service.AssignOfficerForVerification(this.detailsToAssignOfficer)
      .subscribe((response) => {
        console.log('The Response recived from the observable after sending request to assign a verification officer is', response);

      },
        (error) => {
          console.log('some error occured while assigning a officer The error occured is', error);
        })
  }

  //#endregion



}
