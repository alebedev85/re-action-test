import Post from '../Post/Post';
import { useAppSelector } from '../../redux/store';
import { selectFilteredPosts } from '../../redux/slices/postsSlice';
import { selectFilters } from '../../redux/slices/filtersSlice';
import styles from './Posts.module.scss';

export default function Posts() {
  const filters = useAppSelector(selectFilters);
  const postList = useAppSelector((state) =>
    selectFilteredPosts(state, filters)
  );

  return postList.length ? (
    <div className={styles.posts}>
      {postList.map((item) => (
        <Post key={item.id} id={item.id} title={item.title} body={item.body} />
      ))}
    </div>
  ) : (
    <span>Список пуст</span>
  );
}
