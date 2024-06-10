import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/service/login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }


  //#region  For Navbar
  isCollapsed: boolean = false;
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;

  }
  //#endregion


  //#region Logout
  logOut() {

    // first we need to remove the Token from the local storage 
    localStorage.removeItem('Token');
    localStorage.removeItem('Id');
    // then we need to log out 
    this.router.navigate(['/login']);
  }

  //#endregion


  //#region Show and hide credentials 

  toggleCredetialsForm: boolean = false;

  showCredentialForm() {
    console.log('The button clickek to toogle credentials form ')
    this.toggleCredetialsForm = !this.toggleCredetialsForm;
  }

  //#endregion



  //#region Update Credentials
  UpdateCredentials(form: NgForm) {

    console.log('The new Credentials are recieved and they are ', form.value);

    this.loginService.UpdateCredentials(form.value)
      .subscribe((response) => {
        console.log('The response we get after sending a request to Update the credentials is ', response);
      },
        (error) => {
          console.log('we have Encountered a error when sending request to api for Updating Credentials', error);
        })
  }

  //#endregion

}
