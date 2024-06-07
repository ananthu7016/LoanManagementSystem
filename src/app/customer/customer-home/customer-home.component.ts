import { Component, OnInit } from '@angular/core';
import { CustomerLoanDetails } from 'src/app/shared/model/customer-loan-details';
import { CustomerService } from 'src/app/shared/service/customer.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.scss']
})
export class CustomerHomeComponent implements OnInit {

  //This is the Component for Customer Home Page after the Customer Logs in using his/her credential the Page related to this component 
  //is responsible to show all the details That belong to the Particular Customer.


  //---Declaration of some Variables 

  custIdOfLoggedIn:number=2;
  showloanDetails:boolean=false;
  //---

  constructor(public service:CustomerService) { }

  ngOnInit(): void {
    console.log('Calling The Method to get the Details of Loans ');
    this.service.GetLoansOfCustomer(this.custIdOfLoggedIn);
  }


  //#region Details of Particular Loan 

  LoanDetails:CustomerLoanDetails=new CustomerLoanDetails();

  loanDetails(loandetails:CustomerLoanDetails){

    console.log('The Button to show the Details of Individual loan is cliked The Details Recieved are ');
    console.log(loandetails);
    
    // we need to assign it to a global instance 
    this.LoanDetails = loandetails;

    // then we need to show the Div that store loan Details 
    this.showloanDetails= true;
  }

  //#endregion



  //#region  Close Loan Details Div

  closeLoanDetail():void{
    this.showloanDetails= false;
  }

  //#endregion
  

}
