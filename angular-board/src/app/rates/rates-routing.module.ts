import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RatesComponent } from './rates/rates.component';
import { ObseratesComponent } from './obserates/obserates.component';

const routes: Routes = [
  {
    path: '',
    component: RatesComponent
  },
  {
    path: 'observables',
    component: ObseratesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatesRoutingModule { }
