import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { data: "", error: false, loading: false };

export const asyncGet = createAsyncThunk(
  "data/asyncGet",
  async (payload, { rejectWithValue }) => {
    const city = payload ? payload : "tehran";
    const key = "4ea3e3d50f69454b968131056221805";
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json`,
        {
          params: { key, q: city, days: 3 },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const asyncSlice = createSlice({
  name: "data",
  initialState,
  extraReducers: {
    // get data
    [asyncGet.pending]: (state, action) => {
      return { ...state, data: "", error: false, loading: true };
    },

    [asyncGet.rejected]: (state, action) => {
      return { ...state, data: "", error: action.payload, loading: false };
    },

    [asyncGet.fulfilled]: (state, action) => {
      console.log(action);
      return { ...state, data: action.payload, error: false, loading: false };
    },
  },
});

export const dataReducer = asyncSlice.reducer;
