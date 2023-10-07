import { createSlice } from "@reduxjs/toolkit";
import { viewOrganization, getOrganization } from "../actions/orgAction";

//initail state
const initialState = {
    loading: false,
    organization:[],
    error: false,
    success: false,
    message: null,
  }
  const organizationSlice = createSlice({
    name: 'org',
    initialState,
    reducers: {},
    extraReducers: {

        [viewOrganization.pending]: (state) =>{
            state.loading = true
            state.error = false
        },
        [viewOrganization.fulfilled]: (state, {payload}) =>{
            state.error = false
            state.success = true
            state.org = payload
        },
        [viewOrganization.rejected]: (state, {payload}) =>{
            state.error = payload
            state.loading = false
        },
        [getOrganization.pending]: (state) =>{
            state.loading = true
            state.error = false
        },
        [getOrganization.fulfilled]: (state, {payload}) =>{
            state.error = false
            state.success = true
            state.org = payload
        },
        [getOrganization.rejected]: (state, {payload}) =>{
            state.error = payload
            state.loading = false
        }
    },
})
export default organizationSlice.reducer;