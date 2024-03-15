import { Pagination } from '@mui/material';
import { setPage, selectParams } from '../../redux/slices/postsSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import styles from './Pagination.module.scss';

export default function PaginationFeild() {
  const dispatch = useAppDispatch();
  const { page, pages } = useAppSelector(selectParams);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  };
  return (
    <div className={styles.pagination}>
      <Pagination
        count={pages}
        page={page}
        onChange={handleChange}
        color="primary"
        size="large"
      />
    </div>
  );
}
