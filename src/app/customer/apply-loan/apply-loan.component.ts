import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoanDetails } from 'src/app/shared/model/loan-details';
import { CustomerService } from 'src/app/shared/service/customer.service';
// this is the component to apply loans from the Customer module 
@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.scss']
})
export class ApplyLoanComponent implements OnInit {

  constructor(public service:CustomerService) { }

  ngOnInit(): void {
  console.log('Getting all Details of Loans To Fill in the DropDown')
   this.service.GetAllDetailsOfLoanForDropdown();
  }


  //#region  On Selecting a Loan From Drop Down 

  onLoanSelected(id:number){

    console.log('The Details of Loan Selected is with id',id);

    // now using this id we need to find the instance of that particular id 

    this.service.getDetailsOfSelectedLoan(id);
    //calling a method in service to get the Details of Loans Belonging to this Id

  }


  //#endregion




  //#region When Form Submitted

  onSubmit(form:NgForm){

    console.log('The Values recieved from the Form when the Form is Submitted is ',form.value);

    // when form is submitted we need to print the value in the Binded Variable also
    this.service.detailsOfLoanToApply.custId=this.service.CustomerLoanDetailsArray[0]?.customerId;
    console.log('The value in the Binded Instance is ',this.service.detailsOfLoanToApply);

    // then we need to call the observable in service and pass the value
    this.service.ApplyLoanByCustomer(this.service.detailsOfLoanToApply)
    .subscribe((response)=>{
      console.log('This is the response that we get after sending a request to apply a loan the response is ',response);

    },
  (error)=>{
    console.log('There was an error Occured The error message is',error);
  })


  }

  //#endregion

}
