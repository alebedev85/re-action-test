import { useEffect } from 'react';
import Search from './components/Search/Search';
import Posts from './components/Posts/Posts';
import { useGetPostsListQuery } from './components/Posts/api';
import { setPostsList } from './redux/slices/postsSlices';
import Loader from './components/Loader/Loader';
import { useAppDispatch } from './redux/store';
import styles from './App.module.scss';

function App() {
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess } = useGetPostsListQuery();
  useEffect(() => {
    if (isSuccess) {
      dispatch(setPostsList(data));
    }
  }, [isLoading]); // eslint-disable-line

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <Search />
        {isLoading ? <Loader /> : <Posts />}
      </div>
    </div>
  );
}

export default App;
