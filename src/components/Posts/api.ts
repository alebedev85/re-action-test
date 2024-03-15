import { mainApi } from '../../redux/mainApi';
import { PostType } from '../../utils/types';

type QueryType = {
  query: string;
  page: number;
};

type QueryResType = {
  postlist: PostType[];
  totalCount: number;
};

const PostsApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getPostsList: build.query<QueryResType, QueryType>({
      query: ({ query, page }) => `/posts?q=${query}&_page=${page}`,
      transformResponse: (postlist: PostType[], meta) => {
        return {
          postlist,
          totalCount: Number(meta?.response?.headers.get('X-Total-Count')),
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetPostsListQuery } = PostsApi;
