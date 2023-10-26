import { createSlice } from '@reduxjs/toolkit'
import { viewProducts } from '../actions/productAction';
import { getProduct, searchProduct } from '../actions/productAction';
import { productCategory } from '../actions/productAction';

// initial state
const initialState = {
  loading: false,
  product:[],
  error: false,
  success: false,
  message: null,
}

// products slice
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    // view users
    [viewProducts.pending]: (state) => {
      state.loading = true
      state.error = false
    },
    [viewProducts.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true 
      state.product = payload
    },
    [viewProducts.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    // get single products
    [getProduct.pending]: (state) => {
      state.loading = true
      state.error = false
    },
    [getProduct.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true 
      state.product = payload
    },
    [getProduct.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // search single product 
    [searchProduct.pending]: (state) => {
      state.loading = true
      state.error = false 
    },
    [searchProduct.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true 
      state.product = payload
    },
    [searchProduct.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    //search products using category
    [productCategory.pending]: (state) => {
      state.loading = true
      state.error = false 
    },
    [productCategory.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true 
      state.product = payload
    },
    [productCategory.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

  },

})

// export
export default productSlice.reducer