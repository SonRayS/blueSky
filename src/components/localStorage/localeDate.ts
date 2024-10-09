export function localStorageData({ region }: { region: string }) {
  JSON.stringify({
    region,
  });
  localStorage.setItem("userData", region);
}

export function getLocalData() {
  const region = localStorage.getItem("userData");
  return region;
}

/* Сохранение параметра запроса для повторного переискользование */
