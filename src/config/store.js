// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducers/productReducer';
import orgReducer from '../reducers/orgReducer';
import vacanciesReducer from '../reducers/vacanciesReducer';
import louberWorkReducer from '../reducers/louberWorkReducer';
import biddingReducer from '../reducers/biddingReducer';
const store = configureStore({
  
  reducer: {
    product: productReducer,
    org: orgReducer,
    vacancies: vacanciesReducer,
    loubers:louberWorkReducer,
    bidding:biddingReducer
  }
})

export default store;