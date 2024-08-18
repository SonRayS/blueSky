export default async function getForecast() {
  const url =
    "http://api.weatherapi.com/v1/forecast.json?key=5aaf340334ae4e86852101730241808&q=London&days=5&aqi=no&alerts=no";

  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
