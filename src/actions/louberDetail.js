
  import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../utils/toast";

export const louberDetail = createAsyncThunk(
    "louberWorkDetail",
    async (data, thunkAPI) => {
      try {
  
        console.log("yiiiiii list : ",data);
        localStorage.setItem("louberWorkDetail", JSON.stringify(data));
      } catch (e) {
         console.log("Error", e.response.data);
        handleError("loading...");
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );