import {configureStore} from "@reduxjs/toolkit";

import Products from "./Products";

export default configureStore({
    reducer: {
        "products": Products,
    }
})