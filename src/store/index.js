import {configureStore} from "@reduxjs/toolkit";

import Products from "./Products";
import Basket from "./Basket";

export default configureStore({
    reducer: {
        "products": Products,
        "basket": Basket
    }
})