# Создание и настройка React-App

## 1. Создать репозиторий и склонировать на ПК

## 2. Установить React application

Открыть терминал в папке проекта и установить `react-app`

```powershell
npx create-react-app .
```

## 3. Удалить ненужные файлы

### 3.1 `public/index.html`

В папке `public` оставить только `index.html`. Удалить код из `index.html`, создать базовую разметку
с помощью Emmet.

Разметка может выглядеть так:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### 3.2 `/src`

В папке `/src` достаточно оставить `index.js`, `App.js`, `App.css`

В папке `/src` создать папку `components` для размещения будущих компонентов.

### 3.3 `index.js`

В `index.js` достаточно оставить следующий код:

```js
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
```

### 3.4 `App.js`

В `App.js` достаточно оставить следующий код:

```js
// App.js
import './App.css';

function App() {
  return <div className="App">TEST</div>;
}

export default App;
```

### 3.4 `App.css`

В `App.css` удалить ненужные стили.

## 4. Запустить сервер проверить, нет ли ошибкок.

```powershell
npm start
```

## 5. Настройка pre-commit хуков

### 5.1 Установка зависимосте

Установить в проект следующие пакеты.

`Примечание:` react-app корректно работает с более старой версией версией `eslint 7.11.0`

```powershell
npm install --save-dev prettier eslint@7.11.0
```

### 5.2 Инициализация lint-staged и husky

ользователям `MacOS` и `Linux` систем необходимо выполнить в терминале следующую команду. Она
установит и настроит husky и lint-staged в зависимости от инструментов качества кода из зависимостей
проекта в package.json.

```powershell
npx mrm lint-staged
```

Пользователям `Windows` необходимо выполнить следующую команду. Она делает тоже самое.

```powershell
npx mrm@2 lint-staged
```

### 5.3 Настройка в VSCode

Провреить наличие следующих раширений:

`Prettier - Code formatter`

`Formatting Toggle`

`ESLint`

Можно добавить настройки `Prettier`, создав файл `.prettierrc.yaml` в корневой папке проекта. Можно
добавить следующие настройки.

```yaml
printWidth: 100
useTabs: false
semi: true
singleQuote: true
trailingComma: 'all'
bracketSpacing: true
arrowParens: 'avoid'
proseWrap: 'always'
```

Открыть настройки `VSCode` и проверить следующее:

`autoSave`

![Превью настроек VSCode](./README/1.png)

`formatOnSave`

![Превью настроек VSCode](./README/2.png)

`codeActionsOnSave`

![Превью настроек VSCode](./README/3.png)

Или же добавить код в файл `settings.json`

`Ctrl + Shift + P` => `settings.json` => `Open Settings (JSON)`

```json
{
  "files.autoSave": "onFocusChange",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 6. Настройка Деплоя

[Ссылка на create-react-app](https://create-react-app.dev/docs/deployment#github-pages)

В `package.json` добавить следующию строку:

```json
"homepage": "https://https://имя_пользователя.github.io/имя_репозитория"
```

Сделать билд через терминал:

```powershell
npm run build
```

Установить пакет `gh-pages`

```powershell
npm install --save gh-pages
```

В `package.json` в `scripts` добавить 2 скрипта:

```json
  "scripts": {
    // добавить к остальным скриптам
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
```

Запустить деплой

```powershell
npm run deploy
```

Скрипт `predeploy` запускать не нужно, он выполнится автоматически. Будет создана ветка `gh-pages`,
выполнен коммит и пуш в ваш репозиторий на GitHub.сom, в настройках GitHub Pages автоматически будет
подставлена ветка `gh-pages`, достаточно взять ссылку.

## Если у кого-то не получилось настроить, я не виноват :)
