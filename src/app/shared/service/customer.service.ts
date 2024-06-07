import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {Customer} from 'src/app/shared/model/customer';
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
  
  GetLoansOfCustomer(custId:number):void{

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
}
