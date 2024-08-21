type Condition = {
  text: string;
  icon: string;
};

type Day = {
  temperature: number;
  condition: Condition;
};

type HourlyCondition = {
  time: string;
  time_epoch: number;
  temp_c: number;
  condition: Condition;
  humidity: number;
  wind_kph: number;
  wind_dir: string;
  gust_kph: number;
  chance_of_rain: number;
  chance_of_snow: number;
  is_day: number;
};

export type ForecastDay = {
  date: string;
  date_epoch: number;
  day: Day;
  hour: HourlyCondition[];
};

type Forecast = {
  forecastday: ForecastDay[];
};

export type ForecastData = {
  forecast: Forecast;
};
