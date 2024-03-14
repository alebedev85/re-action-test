import Post from '../Post/Post';
import { useAppSelector } from '../../redux/store';
import { postsListSelector } from '../../redux/slices/postsSlices';
import styles from './Posts.module.scss';

export default function Posts() {
  const postList = useAppSelector(postsListSelector);
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
