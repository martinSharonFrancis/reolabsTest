import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    searchTerm: '',
    searchResult: [],
    loading: false,
    error: ''
}


const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        getSearchRersult(state, action){
            const products = JSON.parse(localStorage.getItem("products") || [])
            const searchResult = products.filter((product) => ((product.id).toString() === action.payload) || ((product.title).toString().includes(action.payload)) );
            state.searchResult = searchResult
        }
    },
    
})

export default searchSlice.reducer
export const { setSearchTerm, getSearchRersult } = searchSlice.actions
// export { getSearchResult }