import startClock from "./startClock";
describe("startClock", () => {
  it("возвращает указанное время", () => {
    const givenTime = "15:30";
    expect(startClock(givenTime)).toBe(givenTime);
  });

  it('возвращает текущее время в формате "ЧЧ:ММ"', () => {
    const currentDate = new Date(2024, 7, 21, 12, 34);
    jest.spyOn(global, "Date").mockImplementation(() => currentDate as unknown as Date);

    const expectedTime = "12:34";

    expect(startClock("Неизвестно")).toBe(expectedTime);

    jest.restoreAllMocks();
  });
});
