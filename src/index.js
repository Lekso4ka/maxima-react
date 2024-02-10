/*
  import => Получить кусок кода, кторый доступен при помощи экспорта внутри текущего файла
  export => Сделать кусок кода (функция/класс/объект) доступным для использования в другом файле
*/

import React from "react";
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";
import {HashRouter} from "react-router-dom";

import App from "./App";

import "./index.css";
import "font-awesome/css/font-awesome.min.css"

import store from "./store";

const tag = createRoot(document.getElementById("root"));
tag.render(<Provider store={store}>
  <HashRouter>
    <App/>
  </HashRouter>
</Provider>)
