import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, share, tap } from 'rxjs/operators';

@Component({
  selector: 'app-obserates',
  templateUrl: './obserates.component.html',
  styles: []
})
export class ObseratesComponent implements OnInit {
  private ratesApi = 'https://api.exchangeratesapi.io/latest';
  public currentEuroRates$: Observable<any> = null;
  public myRates$: Observable<any[]> = null;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getCurrentEuroRates();
  }

  getCurrentEuroRates() {
    const currencies = 'USD,GBP,CHF,JPY';
    const url = `${this.ratesApi}?symbols=${currencies}`;
    this.currentEuroRates$ = this.httpClient.get<any[]>(url).pipe(share());
    this.myRates$ = this.currentEuroRates$.pipe(
      tap(d => console.log(d)),
      map(this.transformData)),
      tap(d => console.log (d));
  }
  private transformData( currentRates) {
    const current = currentRates.rates;
    return Object.keys(current).map(key => ({
                                            date: currentRates.date,
                                            currency: key,
                                            euros: current[key]
    }));
  }
}
