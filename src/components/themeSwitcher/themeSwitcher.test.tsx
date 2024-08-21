import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ThemeToggle from "./themeSwitcher";
import { useTheme } from "../context/useData";

jest.mock("../context/useData", () => ({
  useTheme: jest.fn(),
}));

describe("ThemeToggle", () => {
  it("отображает правильный текст в зависимости от темы", () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      toggleTheme: jest.fn(),
    });

    const { getByText } = render(<ThemeToggle />);

    expect(getByText("Темная тема")).toBeInTheDocument();

    (useTheme as jest.Mock).mockReturnValue({
      theme: "dark",
      toggleTheme: jest.fn(),
    });

    const { getByText: getByTextDark } = render(<ThemeToggle />);

    expect(getByTextDark("Светлая тема")).toBeInTheDocument();
  });

  it("вызывает функцию toggleTheme при нажатии кнопки", () => {
    const mockToggleTheme = jest.fn();

    (useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      toggleTheme: mockToggleTheme,
    });

    const { getByText } = render(<ThemeToggle />);
    const button = getByText("Темная тема");

    fireEvent.click(button);

    expect(mockToggleTheme).toHaveBeenCalled();
  });
});
