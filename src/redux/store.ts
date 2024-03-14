import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import postsReducer from './slices/postsSlice';
import filtersReducer from './slices/filtersSlice';
import { mainApi } from './mainApi';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    filters: filtersReducer,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
