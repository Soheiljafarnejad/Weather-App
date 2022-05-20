import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { data: "", recently: [], error: false, loading: false };

export const asyncGet = createAsyncThunk(
  "data/asyncGet",
  async (payload, { rejectWithValue }) => {
    const key = "4ea3e3d50f69454b968131056221805";
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json`,
        {
          params: { key, q: payload, days: 3 },
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
      return { ...state, error: false, loading: true };
    },

    [asyncGet.rejected]: (state, action) => {
      return { ...state, error: action.payload, loading: false };
    },

    [asyncGet.fulfilled]: (state, action) => {
      const recently = [...state.recently, action.payload];
      return {
        ...state,
        recently: removeDuplicates(recently),
        data: action.payload,
        error: false,
        loading: false,
      };
    },
  },
});

export const dataReducer = asyncSlice.reducer;

const removeDuplicates = (array) => {
  return array.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.location.name === item.location.name)
  );
};
