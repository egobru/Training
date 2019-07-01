import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { TokenStoreService } from './token-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  private token = '';

  constructor(private router: Router, private tokenStore: TokenStoreService) {
    this.tokenStore.select$().subscribe(token => (this.token = token));
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = { Authorization: 'bearer ' + this.token };
    const authReq = req.clone({ setHeaders: authHeader });
    return next.handle(authReq).pipe(catchError(this.handleError.bind(this)));
  }

  private handleError(err) {
    const unauthorizedCode = 401;
    if (err instanceof HttpErrorResponse) {
      if (err.status === unauthorizedCode) {
        this.router.navigate(['security/register']);
      }
    }
    return throwError(err);
  }
  }
