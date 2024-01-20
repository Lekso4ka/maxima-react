/*
  import => Получить кусок кода, кторый доступен при помощи экспорта внутри текущего файла
  export => Сделать кусок кода (функция/класс/объект) доступным для использования в другом файле
*/

import React from "react";
import {createRoot} from "react-dom/client";

import Counter, { randNumber } from "./utils/functions";

const n = new Counter();
n.change(randNumber(101));
console.log(n.val)
n.inc()
n.inc()

const tag = createRoot(document.getElementById("root"));
tag.render(<h1>{n.val}</h1>)
