import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoanRequest } from '../model/loan-request';
import { DropDown } from '../model/drop-down';
import { error } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';
import { AssignOfficer } from '../model/assign-officer';
import { ApprovalDetails } from '../model/approval-details';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // this is the service layer for admin Module 
  constructor(private httpClient: HttpClient, private router: Router) { }


  //#region  Get Details of All Request for Loans 

  //defining an array instace to store the Response recieved 
  ListOfRequestRecived: LoanRequest = new LoanRequest();

  GetDetailsOfAllLoanRequest(): void {

    this.httpClient.get('https://localhost:7285/api/Admin/requests')
      .toPromise()
      .then((response: any) => {

        console.log('We have send a request to get the details of all the loans that any customer has requested The response recived from the api is ', response);

        this.ListOfRequestRecived = response;
        console.log('The Response recived is assigned to global variable');
      })
      .catch((error) => {
        console.log('some error occured while getting the details of all the loans from the Api The error message recieved is :', error);

      })

  }

  //#endregion


  //#region Show or hide Details of Request Div
  showRequestDetailsToogle: boolean = false;

  //#endregion



  //#region  Get Details of All Officers 
  //we need an array of instance to store the details of all Officers
  detailsOfOfficer: DropDown[] = [];

  GetDetailsOfAllOfficer() {

    this.httpClient.get('https://localhost:7285/api/Admin/officers')
      .toPromise()
      .then((response: any) => {
        console.log('The Response that we get from the Api after we send a request to get all the details of officer is', response);
        // then we need to assign the response to our globale instance 
        this.detailsOfOfficer = response;

      })
      .catch((error) => {
        console.log('Some error occured when getting the details of all Officers the error occured is', error);
      })
  }


  //#endregion



  //#region  Assign a Officer for Verification 

  AssignOfficerForVerification(details: AssignOfficer): Observable<any> {
    return this.httpClient.post('https://localhost:7285/api/Admin/Assign', details);
  }
  //#endregion



  //#region Get Details of All Loans to Approve 

  // decalaring an array of instance to show the details
  listOfLoansToApprove: ApprovalDetails[] = [];


  GetDetailsOfLoansToApprove() {

    this.httpClient.get('https://localhost:7285/api/Admin/ToApprove')
      .toPromise()
      .then((response: any) => {
        console.log('we have recieved the response send to get the details of all loans to Approve the response is', response);

        // then we need to assign the response to the globale variable
        this.listOfLoansToApprove = response;
      })
      .catch((error) => {
        console.log('Some error occured while getting the details of all the loans to approve. the error occured is', error);
      })
  }
  //#endregion


  //#region  Show details of Selected details to approve

  selectedApprovalDetail: ApprovalDetails = new ApprovalDetails();
  showApprovalToggle: boolean = false;
  // this boolean is to hide and unhide the component to show details of loan to approve or reject

  //#endregion


  //#region Approve Loan 
  ApproveLoan(details: ApprovalDetails): Observable<any> {

    return this.httpClient.post('https://localhost:7285/api/Admin/Approve', details)
    // so the details of the selected loan is in the instance "selectedApprovalDetail"

  }
  //#endregion


  //#region Reject Loan 

  RejectLoan(details: ApprovalDetails): Observable<any> {

    return this.httpClient.post('https://localhost:7285/api/Admin/Reject', details)
    // so the details of the selected loan is in the instance "selectedApprovalDetail"

  }

  //#endregion

}
