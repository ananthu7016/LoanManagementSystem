import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { VerificationDetails } from '../model/verification-details';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class OfficerService {

  // this is the service for Officer 
  constructor(private httpClient: HttpClient, private router: Router) { }


  //#region Get All Details of Loans to Verify 
  
  // declaring a global array of instance to store the Details to Verify
  listOfVerificationDetails:VerificationDetails[]=[];
  staffId:number=4; // later we will get it from Local storage
  GetDetailsOfAllToVerify(){
    // so based on the officer if only we can get the Details 

    this.httpClient.get('https://localhost:7285/api/Officer/details/'+this.staffId)
    .toPromise()
    .then((response:any)=>{

      console.log('The response Recieved after sending a request to get all the details to verify is ',response);

      // then we need to assign the response to a global variable 
      this.listOfVerificationDetails=response;

    })
    .catch((error)=>{
      console.log('Some Error Occured while getting the details to Verify The error is ',error);

    })
  }

  //#endregion
}
