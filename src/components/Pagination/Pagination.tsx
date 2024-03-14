import { Pagination } from '@mui/material';
import styles from './Pagination.module.scss';

export default function PaginationFeild() {
  return (
    <div className={styles.pagination}>
      <Pagination count={10} color="primary" size="large" />
    </div>
  );
}
