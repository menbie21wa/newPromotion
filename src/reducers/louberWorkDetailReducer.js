import { createSlice } from "@reduxjs/toolkit";
import { louberDetail } from "../actions/louberDetail";

const initialState = {
    loading: false,
    dayWorkDetail:[],
    error: false,
    success: false,
    message: null,
  }
  const detailSlice = createSlice({
    name: 'louberDetail',
    initialState,
    reducers: {},
    extraReducers: {

        [louberDetail.pending]: (state) =>{
            state.loading = true
            state.error = false
            //console.log("pending")
        },
        [louberDetail.fulfilled]: (state, {payload}) =>{
            state.error = false
            state.success = true
            state.dayWorkDetail = payload
           // console.log("fulfilled")
        },
        [louberDetail.rejected]: (state, {payload}) =>{
            state.error = payload
            state.loading = false
            //console.log("rejected")
        }
    },
})
export default detailSlice.reducer;
