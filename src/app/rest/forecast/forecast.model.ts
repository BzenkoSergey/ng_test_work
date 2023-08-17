export class ForecastModel {
  temperature: number;
  weatherCode: number;
  hourlyTemperature2m: number[];
  dayPart: 'day'|'night';

  constructor(d: ForecastModel) {
    this.temperature = d.temperature;
    this.weatherCode = d.weatherCode;
    this.hourlyTemperature2m = d.hourlyTemperature2m;
    this.dayPart = d.dayPart;
  }
}
