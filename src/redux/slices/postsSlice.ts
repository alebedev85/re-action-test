import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { PostType } from '../../utils/types';
import { FiltersType } from './filtersSlice';

type InitialStateType = {
  postsList: PostType[];
};

const initialState: InitialStateType = {
  postsList: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPostsList: (state, action: PayloadAction<PostType[]>) => {
      state.postsList = action.payload;
    },
  },
});

export default postsSlice.reducer;
export const { setPostsList } = postsSlice.actions;
// export const selectPostsList = (state: RootState) => state.posts.postsList;
export const selectFilteredPosts = (state: RootState, filter: FiltersType) =>
  state.posts.postsList.filter(
    (p) =>
      p.title.toLowerCase().includes(filter.text.toLowerCase()) ||
      p.body.toLowerCase().includes(filter.text.toLowerCase())
  );
