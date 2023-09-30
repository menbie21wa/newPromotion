import { createSlice } from "@reduxjs/toolkit";
import { Daily_Labourer } from "../actions/louberWorkAction";
import { searchVacancies } from "../actions/vacanciesAction";

//initail state
const initialState = {
    loading: false,
    loubers:[],
    loubers: {},
    filter:[],
    error: false,
    success: false,
    message: null,
  }
  const LouberSlice = createSlice({
    name: 'loubers',
    initialState,
    reducers: {},
    extraReducers: {

      //Labourer work
        [Daily_Labourer.pending]: (state) =>{
            //console.log("vacancies reducer pending");
            state.loading = true
            state.error = false
        },
        [Daily_Labourer.fulfilled]: (state, {payload}) =>{
            state.error = false
            state.success = true
            state.loubers = payload
            console.log("louber reducer fulfilled",payload);
        },
        [Daily_Labourer.rejected]: (state, {payload}) =>{
            state.error = payload
            state.loading = false
        },
        [searchVacancies.pending]: (state) =>{
            state.loading = true
            state.error = false
           // console.log("search pending")
        },
        [searchVacancies.fulfilled]: (state, {payload}) =>{
            state.success = true
            state.loubers = payload
            state.error = false
            state.filter = payload
           // console.log("search fulfilled")
        },
        [searchVacancies.rejected]: (state, {payload}) =>{
            state.error = payload
            state.success = false
           // console.log("search rejected")
        },
        
    },
})
export default LouberSlice.reducer;