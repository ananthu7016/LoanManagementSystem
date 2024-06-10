import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // so when ever we are making any api calls from the service the control comes to here and then we will inject our token to the request

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  // first we need to get the token from our local storage 
    const token = localStorage.getItem('Token');

    // injecting token to request
    const newRequest = request.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`
      }
    });


    return next.handle(newRequest);
  }
}
