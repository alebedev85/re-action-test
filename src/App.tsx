import styles from './App.module.scss';
import Search from './components/Search/Search';

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <Search />
        <div className={styles.posts}>postsSearch</div>
      </div>
    </div>
  );
}

export default App;
