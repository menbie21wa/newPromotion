import { createSlice } from "@reduxjs/toolkit";
import { addToDetail } from "../actions/detail";

const initialState = {
    loading: false,
    detail:[],
    error: false,
    success: false,
    message: null,
  }
  const detailSlice = createSlice({
    name: 'addToDetail',
    initialState,
    reducers: {},
    extraReducers: {

        [addToDetail.pending]: (state) =>{
            state.loading = true
            state.error = false
            //console.log("pending")
        },
        [addToDetail.fulfilled]: (state, {payload}) =>{
            state.error = false
            state.success = true
            state.detail = payload
           // console.log("fulfilled")
        },
        [addToDetail.rejected]: (state, {payload}) =>{
            state.error = payload
            state.loading = false
            //console.log("rejected")
        }
    },
})
export default detailSlice.reducer;
