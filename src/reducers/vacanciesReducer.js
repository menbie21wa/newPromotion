import { createSlice } from "@reduxjs/toolkit";
import { viewVacancies } from "../actions/vacanciesAction";
import { viewVacancie2 } from "../actions/vacanciesAction";
import { searchVacancies } from "../actions/vacanciesAction";

//initail state
const initialState = {
    loading: false,
    vacancies:[],
    vacancies: {},
    filter:[],
    error: false,
    success: false,
    message: null,
  }
  const vacanciesSlice = createSlice({
    name: 'vacancies',
    initialState,
    reducers: {},
    extraReducers: {

        [viewVacancies.pending]: (state) =>{
            //console.log("vacancies reducer pending");
            state.loading = true
            state.error = false
        },
        [viewVacancies.fulfilled]: (state, {payload}) =>{
            state.error = false
            state.success = true
            state.vacancies = payload
           // console.log("vacancies reducer fulfilled");
        },
        [viewVacancies.rejected]: (state, {payload}) =>{
            state.error = payload
            state.loading = false
        },

        [viewVacancie2.pending]: (state) =>{
            state.loading = true
            state.error = false
            state.error = false
        },
        [viewVacancie2.fulfilled]: (state, {payload}) =>{
            state.vacancies = payload
            state.success = true
        },
        [viewVacancie2.rejected]: (state, {payload}) =>{
            state.loading = false
            state.error = payload
        },
        [searchVacancies.pending]: (state) =>{
            state.loading = true
            state.error = false
           // console.log("search pending")
        },
        [searchVacancies.fulfilled]: (state, {payload}) =>{
            state.success = true
            state.vacancies = payload
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
export default vacanciesSlice.reducer;