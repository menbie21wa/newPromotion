import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleError } from "../utils/toast";

export const viewOrganization = createAsyncThunk(
    "org",
    async (thunkAPI) => {
      try {
        let URL = `http://192.168.0.10:11215/addressapi/organizations/all?for_promotion=true`;
  
        // let response = await createContact(message);
        let response = await axios.get(URL);
  
        // console.log("organization list : ",response);
  
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

  export const getOrganization = createAsyncThunk(
    "org",
    async (id,thunkAPI) => {
      try {
        let URL = `http://192.168.0.10:11215/addressapi/organizations/orginformation/${id}`;
  
        // let response = await createContact(message);
        let response = await axios.get(URL);
  
        // console.log("single organization : ",response);
  
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