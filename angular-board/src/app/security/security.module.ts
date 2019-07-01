import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SecretComponent } from './secret/secret.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';

@NgModule({
  declarations: [RegisterComponent, SecretComponent],
  imports: [CommonModule, SecurityRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
    }
    ]
})
export class SecurityModule { }
