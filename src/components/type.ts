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

type ForecastLocation = {
  country: string;
  lat: number;
  localtime: string;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
};

type ForecastCurrent = {
  condition: { text: string; icon: string; code: number };
  humidity: number;
  is_day: number;
  last_updated: string;
  last_updated_epoch: number;
  temp_c: number;
  wind_dir: string;
  wind_kph: number;
};

export type ForecastData = {
  current: ForecastCurrent;
  forecast: Forecast;
  location: ForecastLocation;
};
