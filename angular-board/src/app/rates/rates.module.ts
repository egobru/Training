import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatesRoutingModule } from './rates-routing.module';
import { RatesComponent } from './rates/rates.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ObseratesComponent } from './obserates/obserates.component';
import { AudiInterceptorService } from './audi-interceptor.service';

@NgModule({
  declarations: [RatesComponent, ObseratesComponent],
  imports: [CommonModule, RatesRoutingModule, HttpClientModule],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AudiInterceptorService,
    multi: true
    }
    ]
})
export class RatesModule { }
