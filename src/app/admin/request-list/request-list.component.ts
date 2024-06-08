import { Component, OnInit } from '@angular/core';
import { LoanRequest } from 'src/app/shared/model/loan-request';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {

  constructor(public service:AdminService) { }

  ngOnInit(): void {
   this.service.GetDetailsOfAllLoanRequest();
   console.log('Calling the method to get all the details of the Loan Requests');

  }


  //#region Detailed of the Request
  detailsOfRequest:LoanRequest=new LoanRequest();
  showDetailedRequest(details:LoanRequest){

    console.log('The details button has been clicked and the details of the loan to show is ',details);

    // then we need to store it to a local instace
    this.detailsOfRequest=details;

  }

  //#endregion

}
