import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type FiltersType = {
  text: string;
};

const initialState: FiltersType = {
  text: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { setFilters } = filtersSlice.actions;
export const selectFilters = (state: RootState) => state.filters;
