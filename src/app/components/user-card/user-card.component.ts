import { Component, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

import { ForecastModel } from '@rest/forecast';
import { UserModel } from '@rest/users';

import * as wmoDescriptions from './wmo-descriptions.json';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent implements OnChanges {
  @Input() user!: UserModel;
  @Input() forecast!: ForecastModel;
  wmoDescription: { description: string, image: string }|null = null;
  lowestTemperature = 0;
  highestTemperature = 0;

  ngOnChanges() {
    const { weatherCode, hourlyTemperature2m, dayPart } = this.forecast;
    const key = weatherCode.toString() as keyof typeof wmoDescriptions;
    this.wmoDescription = wmoDescriptions[key][dayPart];
    this.lowestTemperature = Math.min(...hourlyTemperature2m);
    this.highestTemperature = Math.max(...hourlyTemperature2m);
  }
}
