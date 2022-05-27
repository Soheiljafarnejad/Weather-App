import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: "",
  recently: [],
  error: false,
  loading: false,
  search: { data: [], loading: true },
};

export const asyncGetData = createAsyncThunk(
  "data/asyncGetData",
  async (payload, { rejectWithValue }) => {
    
    const key = process.env.REACT_APP_API_KEY;
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json`,
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

export const asyncSearch = createAsyncThunk(
  "data/asyncSearch",
  async (payload, { rejectWithValue }) => {
    const key = process.env.REACT_APP_API_KEY;
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/search.json`,
        {
          params: { key, q: payload },
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
    [asyncGetData.pending]: (state, action) => {
      return { ...state, error: false, loading: true };
    },

    [asyncGetData.rejected]: (state, action) => {
      return { ...state, error: action.payload, loading: false };
    },

    [asyncGetData.fulfilled]: (state, action) => {
      const newRecently = [...state.recently, action.payload];
      const recently = newRecently.filter(
        (item, index, self) =>
          index ===
          self.findIndex((t) => t.location.name === item.location.name)
      );
      return {
        ...state,
        recently,
        data: action.payload,
        error: false,
        loading: false,
        search: initialState.search,
      };
    },
    // get data searchList
    [asyncSearch.pending]: (state, action) => {
      return { ...state, search: { data: [], loading: true } };
    },

    [asyncSearch.fulfilled]: (state, action) => {
      const data = action.payload.filter(
        (item, index, self) =>
          index ===
          self.findIndex((t) => t.lat === item.lat && t.lon === item.lon)
      );
      return { ...state, search: { data, loading: false } };
    },
  },
  reducers: {
    searchLoading: (state, action) => {
      state.search.loading = true;
    },
  },
});

export const dataReducer = asyncSlice.reducer;
export const { searchLoading } = asyncSlice.actions;
