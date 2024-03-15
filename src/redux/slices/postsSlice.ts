import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { PostType } from '../../utils/types';

type InitialStateType = {
  postsList: PostType[];
  params: {
    query: string;
    page: number;
  };
};

const initialState: InitialStateType = {
  postsList: [],
  params: {
    query: '',
    page: 1,
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
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.params.page = action.payload;
    },
  },
});

export default postsSlice.reducer;
export const { setPostsList, setQuery, setPage } = postsSlice.actions;
export const selectPostsList = (state: RootState) => state.posts.postsList;
export const selectParams = (state: RootState) => state.posts.params;
// export const selectFilteredPosts = (state: RootState, filter: FiltersType) =>
//   state.posts.postsList.filter(
//     (p) =>
//       p.title.toLowerCase().includes(filter.text.toLowerCase()) ||
//       p.body.toLowerCase().includes(filter.text.toLowerCase())
//   );
