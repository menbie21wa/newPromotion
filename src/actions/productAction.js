// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { handleError } from "../utils/toast";
import  BaseUrl from "../utils/BaseUrl";

export const viewProducts = createAsyncThunk(
  "product",
  async (thunkAPI) => {
    try {
      let URL = `${BaseUrl}/addressapi/products/all`;
      // let response = await createContact(message);
      let response = await axios.get(URL);

      // console.log(response);

      if (response.status === 200) {
        return response.data;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
       console.log("Error", e.response.data);
      handleError("loading...");
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const getProduct = createAsyncThunk(
  "product", 
  async (id, thunkAPI) => {
    try {
      console.log("product action id ",id);
      let URL = `${BaseUrl}/addressapi/products/${id}`;

      // let response = await createContact(message);
      let response = await axios.get(URL);

      // console.log(response);
      if (response.status === 200) {
        return response.data;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      handleError("loading...");
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const searchProduct = createAsyncThunk(
  "product",
  async (Pname, thunkAPI) => {
    try {
      // base url
      // console.log("product action page", Pname);

      let baseUrl = `${BaseUrl}/addressapi/products/search?key=${Pname}`;
      // response
      let response = await axios.get(baseUrl);
      // let response = await createContact(message);
      if (response.status === 200) {
        // console.log(response.data);
        return response.data;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      handleError("search single product...");
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const productCategory = createAsyncThunk(
  "product",
  async (Cname, thunkAPI) => {
    try {
      // base url
      // console.log("product action page", Pname);

      let baseUrl = `${BaseUrl}/addressapi/products/search?key=${Cname}`;
      // response
      let response = await axios.get(baseUrl);
      // let response = await createContact(message);
      if (response.status === 200) {
        // console.log(response.data);
        return response.data;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      handleError("search single product...");
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);