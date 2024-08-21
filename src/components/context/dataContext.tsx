import { createContext, ReactNode, useState } from "react";

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
  data: object | null;
  saveData: (newData: object) => void;
}

export const DataContext = createContext<DataContextType | null>(null);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<object | null>(getDataFromLocalStorage());
  function saveData(newData: object) {
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  }

  return <DataContext.Provider value={{ data, saveData }}>{children}</DataContext.Provider>;
};
