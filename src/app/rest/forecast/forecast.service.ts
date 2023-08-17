import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { ForecastResponse } from './forecast-response.interface';
import { ForecastModel } from './forecast.model';

@Injectable({
  providedIn: 'root'
})
export class ForecastRestService {
  constructor(private readonly httpClient: HttpClient) {}

  get(latitude: string, longitude: string) {
    const url = this.genUrl(latitude, longitude);

    return this.httpClient.get<ForecastResponse>(url)
      .pipe(
        map(({ current_weather, hourly }) => new ForecastModel({
          temperature: current_weather.temperature,
          weatherCode: current_weather.weathercode,
          hourlyTemperature2m: hourly.temperature_2m,
          dayPart: current_weather.is_day ? 'day' : 'night'
        }))
      );
  }

  private genUrl(latitude: string, longitude: string) {
    return `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`;
  }
}
