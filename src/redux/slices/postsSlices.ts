import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { PostType } from '../../utils/types';

type InitialState = {
  postsList: PostType[];
};

const initialState: InitialState = {
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
export const postsListSelector = (state: RootState) => state.posts.postsList;
