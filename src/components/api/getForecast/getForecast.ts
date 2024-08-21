import { ForecastData } from "../../type";

export default async function getForecast(city?: string): Promise<ForecastData> {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=5aaf340334ae4e86852101730241808&q=${
    city || "Лондон"
  }&days=5&aqi=no&alerts=no&lang=ru`;

  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
