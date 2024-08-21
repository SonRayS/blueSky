import { ForecastData } from "../../type";

interface ApiError {
  code: number;
  message: string;
}

interface ApiErrorData {
  error: ApiError;
}

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
      const errorData = await response.json();
      handleApiError(response.status, errorData);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Unexpected error: ", error);
    throw error;
  }
}

function handleApiError(status: number, errorData: ApiErrorData): void {
  const errorCode = errorData.error?.code;
  const errorMessage = errorData.error?.message || "Неизвестная ошибка";

  switch (status) {
    case 400:
      handleBadRequestError(errorCode, errorMessage);
      break;
    case 401:
      handleUnauthorizedError(errorCode, errorMessage);
      break;
    case 403:
      handleForbiddenError(errorCode, errorMessage);
      break;
    default:
      console.error(`Необработанная ошибка. Статус: ${status}, Сообщение: ${errorMessage}`);
      throw new Error(errorMessage);
  }
}

function handleBadRequestError(errorCode: number, errorMessage: string): void {
  switch (errorCode) {
    case 1003:
      console.error("Параметр 'q' не указан.");
      throw new Error("Параметр 'q' не указан.");
    case 1005:
      console.error("URL-адрес запроса API недействителен.");
      throw new Error("URL-адрес запроса API недействителен.");
    case 1006:
      alert("Не найдено место :( ");
      throw new Error("Место не найдено.");
    case 9000:
      console.error("Неверный JSON в запросе.");
      throw new Error("Неверный JSON в запросе.");
    case 9001:
      console.error("Слишком много местоположений в запросе.");
      throw new Error("Слишком много местоположений в запросе.");
    case 9999:
      console.error("Внутренняя ошибка приложения.");
      throw new Error("Внутренняя ошибка приложения.");
    default:
      console.error(`Ошибка: ${errorMessage}`);
      throw new Error(errorMessage);
  }
}

function handleUnauthorizedError(errorCode: number, errorMessage: string): void {
  switch (errorCode) {
    case 1002:
      console.error("API-ключ не предоставлен.");
      throw new Error("API-ключ не предоставлен.");
    case 2006:
      console.error("Предоставленный ключ API недействителен.");
      throw new Error("Предоставленный ключ API недействителен.");
    default:
      console.error(`Ошибка авторизации: ${errorMessage}`);
      throw new Error(errorMessage);
  }
}

function handleForbiddenError(errorCode: number, errorMessage: string): void {
  switch (errorCode) {
    case 2007:
      console.error("API-ключ превысил квоту вызовов.");
      throw new Error("API-ключ превысил квоту вызовов.");
    case 2008:
      console.error("API-ключ отключен.");
      throw new Error("API-ключ отключен.");
    case 2009:
      console.error("API-ключ не имеет доступа к ресурсу.");
      throw new Error("API-ключ не имеет доступа к ресурсу.");
    default:
      console.error(`Ошибка доступа: ${errorMessage}`);
      throw new Error(errorMessage);
  }
}
