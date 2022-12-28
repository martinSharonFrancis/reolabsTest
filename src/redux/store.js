import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categories/categorySlice";
import productsSlice from "./products/productsSlice";
import searchSlice from "./search/searchSlice";
import singleProductSlice from "./single-product/singleProductSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        singleProduct: singleProductSlice,
        search: searchSlice,
        category: categorySlice
    },
})

export default store