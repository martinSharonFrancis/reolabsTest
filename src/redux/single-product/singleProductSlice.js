import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loader: false,
    product: {},
    error: ''
}
const fetchSingleProduct = createAsyncThunk('singleProduct/fetchSingleProduct', async (prId = 1) => {
    
        const res = await axios.get(`https://fakestoreapi.com/products/${prId}`);
        return res.data
    })
const singleProductSlice = createSlice({
    name: 'singleProduct',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleProduct.pending, (state) => {
            state.loader = true
        })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                state.loader = false
                state.product = action.payload
                state.error = ''
            })
            .addCase(fetchSingleProduct.rejected, (state, action) => {
                state.loader = false
                state.product = {}
                state.error = action.error.message
            })
            .addDefaultCase((state, action) => {
                state.loader = false
                state.product = {}
                state.error = ''
            })
    }
})

export default singleProductSlice.reducer
export { fetchSingleProduct }