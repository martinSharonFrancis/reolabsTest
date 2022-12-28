import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loader: false,
    products: [],
    error: ''
}
const fetchProducts = createAsyncThunk('products/fetchProducts', async()=>{
    const res = await axios.get(`https://fakestoreapi.com/products`)
    const productString = JSON.stringify(res.data);
    localStorage.setItem("products", productString)
    
    return res.data
})
const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.pending, (state)=>{
            state.loader = true
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.loader = false
            state.products = action.payload
            state.error = ''
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.loader = false
            state.products = []
            state.error = action.error.message
        })
        .addDefaultCase((state)=>{
            state.loader = false
            state.products = []
            state.error = 'something went wrong!'
        })
    }
})

export default productsSlice.reducer
export {fetchProducts}