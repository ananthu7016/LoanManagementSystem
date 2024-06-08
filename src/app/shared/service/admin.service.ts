import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { LoanRequest } from '../model/loan-request';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // this is the service layer for admin Module 
  constructor(private httpClient: HttpClient, private router: Router) { }


//#region  Get Details of All Request for Loans 

//defining an array instace to store the Response recieved 
ListOfRequestRecived:LoanRequest = new LoanRequest();

GetDetailsOfAllLoanRequest():void{

this.httpClient.get('https://localhost:7285/api/Admin/requests')
.toPromise()
.then((response:any)=>{

  console.log('We have send a request to get the details of all the loans that any customer has requested The response recived from the api is ',response);

  this.ListOfRequestRecived=response;
  console.log('The Response recived is assigned to global variable');
})
.catch((error)=>{
  console.log('some error occured while getting the details of all the loans from the Api The error message recieved is :',error);

})

}

//#endregion

}
