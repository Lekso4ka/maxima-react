/*
  import => Получить кусок кода, кторый доступен при помощи экспорта внутри текущего файла
  export => Сделать кусок кода (функция/класс/объект) доступным для использования в другом файле
*/

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <h1>Hello!</h1>,
  document.getElementById("root")
)