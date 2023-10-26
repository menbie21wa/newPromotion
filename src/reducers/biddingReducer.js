import { createSlice } from "@reduxjs/toolkit";
import { viewVacancie2 } from "../actions/biddingAction";
import { searchVacancies } from "../actions/biddingAction";

//initail state
const initialState = {
    loading: false,
    bidding:[],
    filter:[],
    error: false,
    success: false,
    message: null,
  }
  const biddingSlice = createSlice({
    name: 'bidding',
    initialState,
    reducers: {},
    extraReducers: {

        [viewVacancie2.pending]: (state) =>{
            state.loading = true
            state.error = false
           // console.log("search pending")
        },
        [viewVacancie2.fulfilled]: (state, {payload}) =>{
            state.bidding = payload
            state.success = true
         console.log("search AAAAAAAAAAAAAAAAAAAAAAAAA pending==",payload)

        },
        [viewVacancie2.rejected]: (state, {payload}) =>{
            state.loading = false
            state.error = payload
        },
        // [searchVacancies.pending]: (state) =>{
        //     state.loading = true
        //     state.error = false
        //    // console.log("search pending")
        // },
        // [searchVacancies.fulfilled]: (state, {payload}) =>{
        //     state.success = true
        //     state.bidding = payload
        //     state.error = false
        //     state.filter = payload
        //     console.log("search fulfilled",payload)
        // },
        // [searchVacancies.rejected]: (state, {payload}) =>{
        //     state.error = payload
        //     state.success = false
        //    // console.log("search rejected")
        // },
        
    },
})
export default biddingSlice.reducer;