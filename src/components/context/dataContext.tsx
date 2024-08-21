import { createContext, ReactNode, useState } from "react";
import { ForecastData } from "../type";

function getDataFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem("data")!);
  } catch (error) {
    if (error) {
      return null;
    }
  }
}

interface DataContextType {
  data: ForecastData | null;
  saveData: (newData: ForecastData) => void;
}

export const DataContext = createContext<DataContextType | null>(null);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<ForecastData | null>(getDataFromLocalStorage());
  function saveData(newData: ForecastData) {
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  }

  return <DataContext.Provider value={{ data, saveData }}>{children}</DataContext.Provider>;
};
