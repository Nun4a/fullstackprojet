import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem("id_token");
    if (token) {
      const authToken = "Basic " + token;

      const authReq = request.clone({
        headers: request.headers.set("Authorization", authToken),
      });

      return next.handle(authReq);
    }
    else{
      return next.handle(request);

    }
    
  }
}
