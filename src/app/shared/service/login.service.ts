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

            // then we need to set the token to local storage 
            localStorage.setItem('Token',this.userLoggedIn.token);

            // then we need to set the Id of the Logged in User to the local storage also
            localStorage.setItem('Id',this.userLoggedIn.id.toString());
            // then we need to call a function to redirect to particular pages 
            this.RedirectToRespectivePages();

            
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



  
  //#region Redirect to respective pages based on credentials 

  RedirectToRespectivePages(){

    if(this.userLoggedIn != null){
      // then based on the role id we need to redirect the user to respective pages 
      if(this.userLoggedIn.roleId == 1){
        // then we need to redirect to admin page 
        this.router.navigate(['/admin']);
      }
      else if(this.userLoggedIn.roleId==2){
        // then we need to redirect to customer Page 
        this.router.navigate(['/customer'])
      }
      else if(this.userLoggedIn.roleId==3){
        // the we need to redirect to Officer page 
        this.router.navigate(['/officer'])
      }
    }

  }

  //#endregion

}
