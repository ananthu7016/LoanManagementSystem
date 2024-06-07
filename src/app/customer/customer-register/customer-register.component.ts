import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/shared/service/customer.service';


@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss']
})
export class CustomerRegisterComponent implements OnInit {

  // this is the Component for Registering a new Customer 

  constructor(public service: CustomerService) { }

  ngOnInit(): void {
    this.service.newCustomer.custMaritalStatus =false;
    this.service.newCustomer.custEmploymentStatus=false;
    // initializing the properties so that they wont be undefined when the form is submitted
  }


  //#region On Registering a New Customer


  // this method will be called when the details of the customer and entered and the customer has cliked the register button
  onSubmit(form: NgForm): void {
    console.log('The Submit button is clicked and the Values are ', form.value);

    if (this.service != null) {
      // we are calling the method in the service layer and pass the values mapped from the Form 
      this.service.RegisterNewCustomer(form.value)
        .subscribe((response) => {
          console.log('We got the response after sending a request to Register a new Customer The response is ', response);
          //Next we need to Add Toaster for Validation Messages Based on The Response 
          if (response == 1) {
            //Success
          }
          else if (response == 0) {
            //Error message 
          }
        },
          (error) => {
            console.log('some Error Occured while Inserting Details of Customer The Error Occured is', error);
          })
       
          //then we need to reset the Form 

    }

  }


  //#endregion



}
