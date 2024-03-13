import styles from './App.module.scss';
import Search from './components/Search/Search';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <Search />
        <Posts />
      </div>
    </div>
  );
}

export default App;
