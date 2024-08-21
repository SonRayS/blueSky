import getForecast from "./getForecast"; // путь к вашей функции
import { ForecastData } from "../../type";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        location: {
          name: "Лондон",
        },
        forecast: {
          forecastday: [],
        },
      }),
  })
) as jest.Mock;

describe("getForecast", () => {
  it("возвращает данные прогноза для допустимого города", async () => {
    const result: ForecastData = await getForecast("Лондон");

    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining("Лондон"), { method: "GET" });

    expect(result.location.name).toBe("Лондон");
  });
});
