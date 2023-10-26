// import { createSlice } from "@reduxjs/toolkit";
// import { Daily_Labourer } from "../actions/louberWorkAction";
// import { searchVacancies } from "../actions/vacanciesAction";

// const initialState = {
//     loading: false,
//     loubers:[],
//     filter:[],
//     error: false,
//     success: false,
//     message: null,
//   }
//   const LouberSlice = createSlice({
//     name: 'loubers',
//     initialState,
//     reducers: {},
//     extraReducers: {
//         [Daily_Labourer.pending]: (state) =>{
//             state.loading = true
//             state.error = false
//         },
//         [Daily_Labourer.fulfilled]: (state, {payload}) =>{
//             state.loubers = payload
//             state.success = true
//         },
//         [Daily_Labourer.rejected]: (state, {payload}) =>{
//             state.error = payload
//             state.loading = false
//         },
//         [searchVacancies.pending]: (state) =>{
//             state.loading = true
//             state.error = false
//         },
//         [searchVacancies.fulfilled]: (state, {payload}) =>{
//             state.success = true
//             state.loubers = payload
//             state.error = false
//             state.filter = payload
//         },
//         [searchVacancies.rejected]: (state, {payload}) =>{
//             state.error = payload
//             state.success = false
//         },
        
//     },
// })
// export default LouberSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";
import { searchDayWork } from "../actions/louberWorkAction";
import { Daily_Labourer } from "../actions/louberWorkAction";


//initail state
const initialState = {
    loading: false,
    loubers:[],
    filter:[],
    error: false,
    success: false,
    message: null,
  }
  const biddingSlice = createSlice({
    name: 'loubers',
    initialState,
    reducers: {},
    extraReducers: {

        [Daily_Labourer.pending]: (state) =>{
            state.loading = true
            state.error = false
           // console.log("search pending")
        },
        [Daily_Labourer.fulfilled]: (state, {payload}) =>{
            state.loubers = payload
            state.success = true
         console.log("search AAAAAAAAAAAAAAAAAAAAAAAAA pending==",payload)

        },
        [Daily_Labourer.rejected]: (state, {payload}) =>{
            state.loading = false
            state.error = payload
        },
        [searchDayWork.pending]: (state) =>{
            state.loading = true
            state.error = false
           // console.log("search pending")
        },
        [searchDayWork.fulfilled]: (state, {payload}) =>{
            state.success = true
            state.loubers = payload
            state.error = false
            state.filter = payload
            console.log("search fulfilled",payload)
        },
        [searchDayWork.rejected]: (state, {payload}) =>{
            state.error = payload
            state.success = false
           // console.log("search rejected")
        },
        
    },
})
export default biddingSlice.reducer;