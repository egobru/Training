import { Injectable } from '@angular/core';
import { CultureConverter } from './culture-converter';
import { ConverterService } from './converter.service';

@Injectable({
  providedIn: 'root'
})
export class EuropeConverterService implements CultureConverter {
  sourceCulture = 'USA';
  targetCulture = 'Europe';

  constructor(private converterService: ConverterService) {}

  convertDistance = this.converterService.fromMilesToKilometers;
  convertTemperature = this.converterService.fromFarenheitToCelsius;
}
