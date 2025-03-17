# BlueSky

![Sky](./public/skyread.jpg)

Welcome to BlueSky, a weather forecast web application built using React and Vite. This project utilizes modern technology to provide a user-friendly interface for retrieving and displaying weather forecasts.

## About

This project was created using Vite and React, and includes the following key features and pages:

### Home Page

- **Weather Forecast**: Displays the current 5-day weather forecast for the selected city.
- **City Search**: User can enter the city name to retrieve the forecast.
- **Dark/Light Theme**: Ability to switch between dark and light theme for ease of use.
  
### Components

#### `ThemeToggle`

Component to switch between light and dark theme.

- **Dark Theme**: When clicked, switches to a dark theme.
- **Light Theme**: Switches to a light theme when clicked.

#### `Forecast`

Component to display weather forecast.

- **Data Display**: Displays information about temperature, precipitation and other weather conditions for the selected city.
- **Error Handling**: Displays an error message if data cannot be downloaded.

## Localization

- **Localization**: Partial localization of the site has been added to the project.

## Optimization

- **Optimization**: Added optimization with "Memo and useCallback" on main components.

## Basic Commands

- **`dev`**: Starts a local server for development. This allows you to make changes to the code and see the results immediately.
- **`build`**: Compiles TypeScript code with tsc and then creates the final build with Vite.
- **`start`**: Starts the application in production mode after it has been built.
- **`lint`**: Checks code for compliance with standards and style rules.
- **`test`**: Runs tests, verifying functionality and code correctness.

## Install and run

1. **Clone the repository:**

 ``bash
 git clone https://github.com/your-username/bluesky.git

2. **Go to the project directory:**

 cd bluesky

3. **Install dependencies:**

 npm install

4. **Start the project in development mode:**

 npm run dev
