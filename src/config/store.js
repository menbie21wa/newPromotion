// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducers/productReducer';
import orgReducer from '../reducers/orgReducer';
import vacanciesReducer from '../reducers/vacanciesReducer';
import louberWorkReducer from '../reducers/louberWorkReducer';

const store = configureStore({
  
  reducer: {
    product: productReducer,
    org: orgReducer,
    vacancies: vacanciesReducer,
    loubers:louberWorkReducer
  }
})

export default store;