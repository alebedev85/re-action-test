import { mainApi } from '../../redux/mainApi';
import { PostType } from '../../utils/types';

const PostsApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getPostsList: build.query<PostType[], void>({
      query: () => '/posts',
    }),
  }),
  overrideExisting: false,
});

export const { useGetPostsListQuery } = PostsApi;
