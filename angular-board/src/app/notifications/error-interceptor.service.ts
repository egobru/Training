import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { NotificationsStoreService } from './notifications-store.service';


@Injectable({
  providedIn: 'root'
})

export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private notificationsStore: NotificationsStoreService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(req).pipe(tap(null, err => console.log(err)));   // implementación con .tap()
    // return next.handle(req).pipe(catchError(err => of(null))); // implementación con catchError retornando nulo
    // return next.handle(req).pipe(catchError(err => throwError(err)));   // implementación con catchError re-lanzando el error
    return next.handle(req).pipe(catchError(this.handleError.bind(this)));
  }
  private handleError(err) {
   const unauthorized = 401;
   let userMessage = 'Fatal error';
   if (err instanceof HttpErrorResponse) {
      if (err.status === unauthorized) {
  userMessage = 'Authorization needed';
        } else {
          userMessage = 'Comunications error';
        }
    }
   console.log(userMessage); // lo podriamos quitar
   // emisión de la notificación
   this.notificationsStore.dispatchNotification(userMessage);
   return throwError(err);
  }
}



