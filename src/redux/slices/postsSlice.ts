import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { PostType } from '../../utils/types';

type InitialStateType = {
  postsList: PostType[];
  params: {
    query: string;
    page: number;
    pages: number;
  };
};

const initialState: InitialStateType = {
  postsList: [],
  params: {
    query: '',
    page: 1,
    pages: 1,
  },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostsList: (state, action: PayloadAction<PostType[]>) => {
      state.postsList = action.payload;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.params.query = action.payload;
      state.params.page = 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.params.page = action.payload;
    },
    setPages: (state, action: PayloadAction<number>) => {
      state.params.pages = action.payload;
    },
  },
});

export default postsSlice.reducer;
export const { setPostsList, setQuery, setPage, setPages } = postsSlice.actions;
export const selectPostsList = (state: RootState) => state.posts.postsList;
export const selectParams = (state: RootState) => state.posts.params;
