import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {Customer} from 'src/app/shared/model/customer';
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

}
