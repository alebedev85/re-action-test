import { useEffect } from 'react';
import Search from './components/Search/Search';
import PostsList from './components/Posts/PostsList';
import { useGetPostsListQuery } from './components/Posts/api';
import {
  setPostsList,
  setQuery,
  setPages,
  selectParams,
} from './redux/slices/postsSlice';
import Loader from './components/Loader/Loader';
import { useAppDispatch, useAppSelector } from './redux/store';
import { PER_PAGE } from './utils/const';
import styles from './App.module.scss';

function App() {
  const dispatch = useAppDispatch();
  const { query, page } = useAppSelector(selectParams);
  const { data, isFetching, isSuccess } = useGetPostsListQuery({ query, page });

  const handleQuery = (value: string) => {
    dispatch(setQuery(value));
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setPostsList(data.postlist));
      dispatch(setPages(Math.ceil(data.totalCount / PER_PAGE)));
    }
  }, [isFetching, query, page]); // eslint-disable-line

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <Search setText={handleQuery} />
        {isFetching ? <Loader /> : <PostsList />}
      </div>
    </div>
  );
}

export default App;
