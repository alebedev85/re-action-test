import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.page}>
      page
      <div className={styles.maim}>
        maim
        <div className={styles.search}>search</div>
        <div className={styles.posts}>posts</div>
      </div>
    </div>
  );
}

export default App;
