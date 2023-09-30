
// export const addToDetail = (data) => async (dispatch, getState) => {
//     dispatch({
//       type: "addToDetail",
//       payload: data,
//     });
//     return data;
//   };
//   export const removeFromDetails = (data) => async (dispatch, getState) => {
//     dispatch({
//       type: "removeFromDetails",
//       payload: data.id,
//     });
//     console.log("1111", data);
//     return data;
//   };

  // export const getCartTotal = (data) => async (dispatch, getState) => {
  //   dispatch({
  //     type: "getCartTotal",
  //     payload: data,
  //   });
  //   return data;
  // };

  import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleError } from "../utils/toast";

export const addToDetail = createAsyncThunk(
    "detail",
    async (data, thunkAPI) => {
      try {
  
        // console.log("organization list : ",data);
        localStorage.setItem("detailInfo", JSON.stringify(data));
      } catch (e) {
         console.log("Error", e.response.data);
        handleError("loading...");
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );