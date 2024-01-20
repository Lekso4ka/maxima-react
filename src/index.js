/*
  import => Получить кусок кода, кторый доступен при помощи экспорта внутри текущего файла
  export => Сделать кусок кода (функция/класс/объект) доступным для использования в другом файле
*/

import React from "react";
import {createRoot} from "react-dom/client";

import App from "./App";

import "./index.css";
import "font-awesome/css/font-awesome.min.css"

const tag = createRoot(document.getElementById("root"));
tag.render(<App/>)
