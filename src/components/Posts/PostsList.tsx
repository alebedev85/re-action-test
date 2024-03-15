import Post from '../Post/Post';
import { useAppSelector } from '../../redux/store';
import { selectPostsList } from '../../redux/slices/postsSlice';
import styles from './PostsList.module.scss';
import PaginationFeild from '../Pagination/Pagination';

export default function PostsList() {
  const postList = useAppSelector((state) => selectPostsList(state));

  return (
    <div className={styles.posts}>
      {postList.length ? (
        postList.map((item) => (
          <Post
            key={item.id}
            id={item.id}
            title={item.title}
            body={item.body}
          />
        ))
      ) : (
        <span>Список пуст</span>
      )}
      <PaginationFeild />
    </div>
  );
}
