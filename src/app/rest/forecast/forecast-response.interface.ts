export interface ForecastResponse {
  current_weather: {
    temperature: number,
    weathercode: number,
    is_day: 0|1
  },
  hourly: {
    temperature_2m: number[]
  }
}
