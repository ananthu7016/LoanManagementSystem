import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {Customer} from 'src/app/shared/model/customer';
import {ApplyLoan} from 'src/app/shared/model/apply-loan';
import {LoanDetails} from 'src/app/shared/model/loan-details';
import {CustomerLoanDetails} from 'src/app/shared/model/customer-loan-details';
import { error } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //this is the Service of the Customer Module 
  constructor(private httpClient: HttpClient, private router: Router) { }



  //#region Register a new Customer 

  //we need an instance to Map the Data Entered in the Form 
  newCustomer :Customer = new Customer();

  
  RegisterNewCustomer(customer:Customer):Observable<any>{
    return this.httpClient.post('https://localhost:7285/api/Customer',customer);
  }


  //#endregion



  //#region Get Details Of All Loans Taken By a Customer 
  //here we need to get the Details of All Loans Taken by the Customer to be Displayed to Him 

  //-----Declare an array to store the instance of Loan details of customer 
  CustomerLoanDetailsArray:CustomerLoanDetails[]=[];
  
  GetLoansOfCustomer(custId:string):void{


    this.httpClient.get('https://localhost:7285/api/Customer/'+custId)
    .toPromise()
    .then((response:any)=>{

      console.log('We got the Response after sending a request to get the details of Loans Taken by a Customer The Response we get is ',response);
      //Then we need to assign the Details recieved to an Array of Instace so that we can List Them.

      // then we need to map the response to The Global array instance 
      try{
        this.CustomerLoanDetailsArray=response;
        console.log('The response Recieved is stored to global array');
      }
      catch(er){}

    })
    .catch((error)=>{
      console.log('Some Error Occured while Getting the Details of Loan The Error Occured is ',error);
    });

  }


  //#endregion


  //#region  Get Details of All Available loans to fill in the DropDown 

  DetailsOfAllLoans:LoanDetails[] =[];

  GetAllDetailsOfLoanForDropdown(){

    this.httpClient.get('https://localhost:7285/api/Customer/Loans')
    .toPromise()
    .then((response:any)=>{
      console.log('The Response that we get after sending a request to get all available loans the response that we get is',response);

      // then we need to assign the response to the Global instance
      try{
        this.DetailsOfAllLoans = response; 
        console.log('The response if assigned to Globale instance succesfully');
      }
      catch(error){}

    })
    .catch((error)=>{
      console.log('Some Error Occured');
    });

  }

  //#endregion


  //#region  On Selecting a Loan From DropDown 
      SelectedLoan: LoanDetails=new LoanDetails();
      loanSelectedToogle:boolean=false;

  getDetailsOfSelectedLoan(id:number){

      this.SelectedLoan = this.DetailsOfAllLoans.find(y=>y.loanId == id);
      console.log('The Details of loans selected by the customer is ',this.SelectedLoan);
      // then we need to Show the div that show the details 
      this.loanSelectedToogle=true;
  }

  //#endregion


  //#region  Apply for a loan 

  showApplyLoanForm:boolean = false;

  detailsOfLoanToApply:ApplyLoan = new ApplyLoan();


  ApplyLoanByCustomer(detail:ApplyLoan):Observable<any>{
    return this.httpClient.post('https://localhost:7285/api/Customer/Apply',detail);
  }

  //#endregion

}
