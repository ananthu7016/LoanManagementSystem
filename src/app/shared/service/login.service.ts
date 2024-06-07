import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private router: Router) { }



  // This is the Service layer of The Login 


  //#region  Validate User Credentials 

  public userLoggedIn: User = new User();

  // creating a global instance to store the user that is Logged in Or to store the Response that 
  // we get From the Api when passed the credentials 


  ValidateUserCredentials(user: User): void {


    this.httpClient.post('https://localhost:7285/api/Login/'+user.UserName+'/'+user.PassWord, user)
      .toPromise()
      .then((response: any) => {

        if (response) {
          console.log('The Response recieved after sending a request to API is ');
          console.log(response);
          // so if response is there we need to assing it to our global variable to store the logged in user 

          try {
            this.userLoggedIn = response;
            console.log('The User has been Successfully Assigned to the Global Variable');

            // this is to make sure that if its a Wrong Credentials The username and password entered by the user stays in the Input field
            this.userLoggedIn.UserName = user.UserName;
            this.userLoggedIn.PassWord = user.PassWord;
          }
          catch (error) {
            console.log('There was some error While assigning the Response to Gloabal instance');
          }

        }

      })
      .catch((error) => {
        console.log('Some Error occured while Fetching the Response from Api The Error Occured is ');
        console.log(error);
      })

  }

  //#endregion
}
