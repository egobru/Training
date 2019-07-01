import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable()

export class AudiInterceptorService implements HttpInterceptor {

  constructor() { }

  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    return next.handle(req).pipe(
    filter((event: HttpEvent<any>) => event instanceof HttpResponse),
    tap((resp: HttpResponse<any>) => this.audiEvent(resp, started))
    );
    }
    private audiEvent(resp: HttpResponse<any>, started: number) {
      const elapsedMs = Date.now() - started;
      const eventMessage = resp.statusText + ' on ' + resp.url;
      const message = eventMessage + ' in ' + elapsedMs + 'ms';
      console.log(message);
      }
}
