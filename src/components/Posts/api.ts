import { mainApi } from '../../redux/mainApi';
import { PostType } from '../../utils/types';

type QueryType = {
  query: string;
  page: number;
};

const PostsApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getPostsList: build.query<PostType[], QueryType>({
      query: ({ query, page }) => `/posts?q=${query}&_page=${page}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetPostsListQuery } = PostsApi;
