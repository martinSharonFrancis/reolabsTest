import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    categoryList: [],
    categoryProducts: [],
    loader: false
}

const getCategoryList = createAsyncThunk('category/getCategoryList', async()=>{
    const res = await axios.get(`https://fakestoreapi.com/products/categories`)
    return await res.data
})
const getCategoryProducts = createAsyncThunk('category/getCategoryProducts', async(catName)=>{
    const res = await axios.get(`https://fakestoreapi.com/products/category/${catName}`)
    return res.data
})
const categorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getCategoryList.fulfilled, (state, action)=>{
            state.categoryList = action.payload
        })
        .addCase(getCategoryProducts.pending, (state)=>{
            state.loader = true
        })
        .addCase(getCategoryProducts.fulfilled, (state, action)=>{
            state.loader = false
            state.categoryProducts = action.payload
        })
    }
})

export default categorySlice.reducer
export {getCategoryList, getCategoryProducts}