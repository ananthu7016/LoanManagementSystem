import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../shared/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // using DI to Get the instance of loginService 
  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }


  // this is the Component of Login its responsible for Interacting with the Login Service layer which communicate with our database 



  //#region   Login Button is Click

  // if the validations are perfect and after the login button is clicked this Function is called and which Passes the
  // username and password entered by the user to check it against the Database 


  onSubmit(form: NgForm) {


    console.log('The User Has Clicked The Login Button and The Data Mapped from the Form is', form.value);

    if (form.valid && form) {
      // that if if validation is True and Form is not Empty 
      this.loginService.ValidateUserCredentials(form.value);
    } else {
      console.log('The Form is InValid or The Mapping of Values is Not Done Properly');
    }

    

  }

  //#endregion


  //#region Toggle registration form 
  toggleRegistrationForm:boolean = false;

  ShowRegistrationForm(){
    this.toggleRegistrationForm = !this.toggleRegistrationForm;
  }
  //#endregion

}
