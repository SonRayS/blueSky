# BlueSky

Добро пожаловать в BlueSky, веб-приложение для просмотра прогноза погоды, созданное с использованием React и Vite. Этот проект использует современные технологии для предоставления удобного интерфейса для получения и отображения прогноза погоды.

## О проекте

Этот проект был создан с помощью Vite и React, и включает в себя следующие ключевые функции и страницы:

### Главная страница

- **Прогноз погоды**: Отображает текущий прогноз погоды на 5 дней для выбранного города.
- **Поиск города**: Пользователь может ввести название города для получения прогноза.
- **Темная/Светлая тема**: Возможность переключения между темной и светлой темой для удобства использования.
  
### Компоненты

#### `ThemeToggle`

Компонент для переключения между светлой и темной темой.

- **Темная тема**: При нажатии на кнопку переключается на темную тему.
- **Светлая тема**: При нажатии на кнопку переключается на светлую тему.

#### `Forecast`

Компонент для отображения прогноза погоды.

- **Показ данных**: Отображает информацию о температуре, осадках и других погодных условиях для выбранного города.
- **Обработка ошибок**: Показывает сообщение об ошибке, если данные не могут быть загружены.

## Локализация

- **Локализация**: В проекте добавлена частичная локализация сайта.

## Оптимизация

- **Оптимизация**: Добавлена оптимизация с помощью "Memo и useCallback" на основные компоненты.

## Основные команды

-   **`dev`**: Запускает локальный сервер для разработки. Это позволяет вам вносить изменения в код и немедленно видеть результаты.
-   **`build`**: Компилирует TypeScript код с помощью tsc и затем создает финальную сборку с Vite.
-   **`start`**: Запускает приложение в продакшн-режиме после его сборки.
-   **`lint`**: Проверяет код на соответствие стандартам и правилам стиля.
-   **`test`**: Выполняет тесты, проверяя функциональность и корректность кода.

## Установка и запуск

1. **Клонируйте репозиторий:**

  ```bash
  git clone https://github.com/your-username/bluesky.git

2. **Перейдите в каталог проекта:**

  cd bluesky

3. **Установите зависимости:**

  npm install

4. **Запустите проект в режиме разработки:**

  npm run dev 

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
